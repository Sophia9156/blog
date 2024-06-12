import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  type?: "warning";
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  primary = false,
  size = "medium",
  children,
  ...props
}) => {
  return (
    <StyledButton type={type} $primary={primary} $size={size} {...props}>
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  type?: "warning";
  $primary?: boolean;
  $size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<StyledButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${(p) =>
    p.$primary
      ? css`
          color: white;
          background-color: #1ea7fd;
        `
      : css`
          color: #333;
          background-color: white;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}
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
    p.type === "warning"
      ? css`
          background-color: red;
        `
      : ""}
`;
