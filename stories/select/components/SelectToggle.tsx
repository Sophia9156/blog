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
    toggleRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    toggle();
  };

  return (
    <ToggleButton
      ref={toggleRef}
      $primary={primary}
      $size={size}
      $isOpen={isOpen}
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
  $isOpen?: boolean;
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
          border: 1px solid #1ea7fd;
          &:hover {
            border: 1.5px solid #0e81fc;
          }
          ${p.$isOpen ? `border: 1.5px solid #0e81fc` : ""}
        `
      : css`
          border: 1px solid #aaa;
          &:hover {
            border: 1.5px solid #888;
          }
          ${p.$isOpen ? `border: 1.5px solid #0e81fc` : ""}
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

const ToggleInput = styled.input`
  width: 0;
  border: none;
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
