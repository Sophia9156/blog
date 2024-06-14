import React from "react";
import styled, { css } from "styled-components";

interface CheckboxProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  name?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  primary = false,
  size = "medium",
  checked,
  onChange,
  label,
  name,
  disabled = false,
}) => {
  const onClick = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={() => onClick()}
      />
      <StyledCheckbox
        $primary={primary}
        $size={size}
        $checked={checked}
        $disabled={disabled}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        onClick={onClick}
      >
        {checked ? (
          <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
        ) : (
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z" />
        )}
      </StyledCheckbox>

      {label && (
        <Label $size={size} $disabled={disabled} onClick={onClick}>
          {label}
        </Label>
      )}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface StyledCheckboxProps {
  $primary?: boolean;
  $size?: "small" | "medium" | "large";
  $checked: boolean;
  $disabled?: boolean;
}

const StyledCheckbox = styled.svg<StyledCheckboxProps>`
  display: inline-block;
  cursor: pointer;
  ${(p) =>
    p.$disabled
      ? css`
          fill: #aaa;
        `
      : p.$primary
        ? css`
            fill: #1ea7fd;
            &:hover {
              fill: #58bfff;
            }
          `
        : css`
            fill: #333;
            &:hover {
              fill: #888;
            }
          `}
  ${(p) =>
    p.$size === "small"
      ? css`
          width: 20px;
          height: 20px;
        `
      : p.$size === "large"
        ? css`
            width: 28px;
            height: 28px;
          `
        : css`
            width: 24px;
            height: 24px;
          `}
`;

const Label = styled.label<{
  $size?: "small" | "medium" | "large";
  $disabled?: boolean;
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-left: 8px;
  color: #333;
  cursor: pointer;
  ${(p) =>
    p.$size === "small"
      ? css`
          font-size: 12px;
        `
      : p.$size === "large"
        ? css`
            font-size: 16px;
          `
        : css`
            font-size: 14px;
          `}
  ${(p) =>
    p.$disabled
      ? css`
          color: #aaa;
        `
      : ""}
`;
