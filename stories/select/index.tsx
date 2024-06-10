import React, {
  createContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";
import styled from "styled-components";
import { SelectItem, SelectItemProps } from "./components/SelectItem";
import { SelectMenu, SelectMenuProps } from "./components/SelectMenu";
import { SelectToggle } from "./components/SelectToggle";

export interface OptionsProps {
  label: string;
  value: string;
}

interface SelectContextProps {
  isOpen: boolean;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  value?: string;
  options?: any[];
  setOptions?: React.Dispatch<React.SetStateAction<OptionsProps[]>>;
  toggle: () => void;
  selectItem: (item: string) => void;
  disabled?: boolean;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

interface SelectProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  value?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  disabled?: boolean;
}

interface SelectGlobalProps extends React.FC<SelectProps> {
  Toggle: React.FC;
  Menu: React.FC<SelectMenuProps>;
  Item: React.FC<SelectItemProps>;
}

export const Select: SelectGlobalProps = ({
  primary = false,
  size = "medium",
  value = "",
  onChange,
  children,
  disabled = false,
}) => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<OptionsProps[]>([]);

  const toggle = () => setIsOpen(!isOpen);
  const selectItem = (value: string) => {
    onChange && onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (isOpen && !selectRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isOpen]);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        primary,
        size,
        value,
        options,
        setOptions,
        toggle,
        selectItem,
        disabled,
      }}>
      <SelectContainer ref={selectRef}>{children}</SelectContainer>
    </SelectContext.Provider>
  );
};

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

Select.Item = SelectItem;
Select.Menu = SelectMenu;
Select.Toggle = SelectToggle;

export const useSelect = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown");
  }
  return context;
};
