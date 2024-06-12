import React from "react";
import styled, { css } from "styled-components";
import { useSelect } from "..";

export const SelectToggle: React.FC = () => {
  const { primary, size, isOpen, options, toggle, value, disabled, toggleRef } =
    useSelect();
  const label = React.useMemo(() => {
    if (options && options.length > 0) {
      const temp = options?.find((el) => el.value === value)?.label;
      return temp;
    } else return "";
  }, [options, value]);

  const onClick = () => {
    if (disabled) return;
    toggle();
  };

  return (
    <ToggleButton
      ref={toggleRef}
      $primary={primary}
      $size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      <Arrow $isOpen={isOpen} />
    </ToggleButton>
  );
};

interface ToggleButtonProps {
  $primary?: boolean;
  $size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const ToggleButton = styled.button<ToggleButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border-radius: 12px;
  background-color: white;
  color: #333;
  cursor: pointer;
  width: 100%;
  ${(p) =>
    p.$primary
      ? css`
          border: 2px solid #1ea7fd;
          &:hover {
            border: 2px solid #0e81fc;
          }
        `
      : css`
          border: 2px solid #aaa;
          &:hover {
            border: 2px solid #888;
          }
        `}
  ${(p) =>
    p.$size === "small"
      ? css`
          font-size: 12px;
          padding: 10px 12px 10px 16px;
        `
      : p.$size === "large"
        ? css`
            font-size: 16px;
            padding: 12px 18px 12px 24px;
          `
        : css`
            font-size: 14px;
            padding: 11px 16px 11px 20px;
          `}
  ${(p) =>
    p.disabled
      ? css`
          color: #aaa;
          border: 2px solid #ccc;
        `
      : ""}
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  vertical-align: middle;
  margin-left: 12px;
  ${(p) =>
    p.$isOpen
      ? css`
          border-top: 6px solid transparent;
          border-bottom: 6px solid black;
          margin-top: -6px;
        `
      : css`
          border-top: 6px solid black;
          border-bottom: 6px solid transparent;
          margin-bottom: -6px;
        `}
`;
