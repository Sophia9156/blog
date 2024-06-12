import React from "react";
import styled, { css } from "styled-components";
import { useSelect } from "..";

export interface SelectItemProps {
  children: string;
  value: string;
}

export const SelectItem: React.FC<SelectItemProps> = ({ children, value }) => {
  const { size, value: selectedItem, setOptions, selectItem } = useSelect();

  React.useEffect(() => {
    children &&
      value &&
      setOptions &&
      setOptions((prev) => [...prev, { label: children, value }]);
  }, [children, setOptions, value]);

  return (
    <Item
      $isSelected={selectedItem ? selectedItem === value : false}
      $size={size}
      onClick={() => selectItem(value)}
    >
      {children}
    </Item>
  );
};

const Item = styled.div<{
  $size?: "small" | "medium" | "large";
  $isSelected: boolean;
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  ${(p) =>
    p.$size === "small"
      ? css`
          font-size: 12px;
          padding: 10px 16px;
        `
      : p.$size === "large"
        ? css`
            font-size: 16px;
            padding: 12px 24px;
          `
        : css`
            font-size: 14px;
            padding: 11px 20px;
          `}
  ${(p) =>
    p.$isSelected
      ? css`
          background-color: #1ea7fd20;
        `
      : ""}
`;
