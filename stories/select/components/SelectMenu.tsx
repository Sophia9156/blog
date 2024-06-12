import React from "react";
import styled from "styled-components";
import { useSelect } from "..";
import SelectPortal from "./SelectPotal";

export interface SelectMenuProps {
  children: React.ReactNode;
}

export const SelectMenu: React.FC<SelectMenuProps> = ({ children }) => {
  const { isOpen, toggleRef } = useSelect();
  const [menuStyle, setMenuStyle] = React.useState<React.CSSProperties>({
    width: "100%",
  });

  React.useEffect(() => {
    if (toggleRef?.current) {
      const toggleRect = toggleRef.current.getBoundingClientRect();
      setMenuStyle({
        top: toggleRect.bottom + window.scrollY,
        left: toggleRect.left + window.scrollX,
        width: toggleRect.width,
      });
    }
  }, [isOpen, toggleRef]);

  return (
    <SelectPortal>
      <Menu $isOpen={isOpen} style={menuStyle}>
        {children}
      </Menu>
    </SelectPortal>
  );
};

const Menu = styled.div<{
  $isOpen: boolean;
}>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  z-index: 99999;
  width: 100%;
  padding: 6px 0;
`;
