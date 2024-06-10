import React from "react";
import styled from "styled-components";
import { useSelect } from "..";

export interface SelectMenuProps {
  children: React.ReactNode;
}

export const SelectMenu: React.FC<SelectMenuProps> = ({ children }) => {
  const { isOpen, size } = useSelect();
  return (
    <Menu
      isOpen={isOpen}
      size={size}>
      {children}
    </Menu>
  );
};

const Menu = styled.div<{
  isOpen: boolean;
  size?: "small" | "medium" | "large";
}>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  z-index: 99999;
  width: 100%;
  padding: 6px 0;
`;
