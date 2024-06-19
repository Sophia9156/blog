import React from "react";
import styled, { css } from "styled-components";

interface InputProps {
  type?: "email" | "text" | "number" | "password";
  id?: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  showCount?: boolean;
  maxLength?: number;
  allowClear?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  id,
  primary = false,
  size = "medium",
  defaultValue,
  value,
  onChange,
  disabled,
  showCount = false,
  maxLength = 200,
  allowClear = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (e.target.value.length > maxLength) return;
    onChange && onChange(e.target.value);
  };

  const handleClear = () => {
    onChange && onChange("");
  };

  return (
    <InputContainer>
      <StyledInput
        type={type}
        id={id}
        $primary={primary}
        $size={size}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        $showCount={showCount}
      />
      {showCount && (
        <CountContainer>
          {value?.length} / {maxLength}
        </CountContainer>
      )}
      {allowClear && (
        <ClearButton
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          onClick={handleClear}
        >
          <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </ClearButton>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface StyledInputProps {
  $primary?: boolean;
  $size?: "small" | "medium" | "large";
  disabled?: boolean;
  $showCount?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  &::-ms-clear {
    display: none;
  }
  border-style: solid;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: white;
  border-width: 1px;
  border-radius: 8px;
  color: #333;
  &:focus {
    border-width: 2px;
  }
  ${(p) =>
    p.disabled
      ? css`
          cursor: not-allowed;
          color: #aaa;
          background-color: #f5f5f5;
        `
      : p.$primary
        ? css`
            border-color: #1ea7fd;

            &:hover {
              border-color: #268fff;
            }
            &:focus {
              border-color: #268fff;
            }
          `
        : css`
            border-color: #aaa;

            &:hover {
              border-color: #888;
            }
            &:focus {
              border-color: #888;
            }
          `}
  ${(p) =>
    p.$size === "small"
      ? css`
          font-size: 12px;
          padding: 4px 8px;
          padding-right: ${p.$showCount ? "53px" : "8px"};
        `
      : p.$size === "large"
        ? css`
            font-size: 16px;
            padding: 6px 12px;
            padding-right: ${p.$showCount ? "57px" : "12px"};
          `
        : css`
            font-size: 14px;
            padding: 5px 10px;
            padding-right: ${p.$showCount ? "55px" : "10px"};
          `};
`;

const CountContainer = styled.div`
  position: absolute;
  right: 6px;
  bottom: 4px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #888;
`;

const ClearButton = styled.svg`
  margin: 0px 4px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: #888;
  &:hover {
    fill: #666;
  }
`;
