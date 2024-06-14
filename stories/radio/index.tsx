import React from "react";
import styled, { css } from "styled-components";

interface RadioProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  value: string;
  label: string;
  name?: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  primary = false,
  size = "medium",
  value,
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
}) => {
  const onClick = (value: string) => {
    if (disabled) return;
    onChange(value);
  };

  return (
    <RadioContainer>
      <HiddenRadio
        value={value}
        name={name}
        checked={checked}
        onChange={() => onClick(value)}
        disabled={disabled}
      />
      <StyledRadio
        $primary={primary}
        $size={size}
        $checked={checked ?? false}
        $disabled={disabled}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        onClick={() => onClick(value)}
      >
        {checked ? (
          <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        ) : (
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        )}
      </StyledRadio>

      {label && (
        <Label $size={size} $disabled={disabled} onClick={() => onClick(value)}>
          {label}
        </Label>
      )}
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
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

interface StyledRadioProps {
  $primary?: boolean;
  $size?: "small" | "medium" | "large";
  $checked: boolean;
  $disabled?: boolean;
}

const StyledRadio = styled.svg<StyledRadioProps>`
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
          width: 16px;
          height: 16px;
        `
      : p.$size === "large"
        ? css`
            width: 24px;
            height: 24px;
          `
        : css`
            width: 20px;
            height: 20px;
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

// interface RadioGroupProps {
//   children: React.ReactNode;
//   name: string;
//   value?: string;
//   onChange?: (value: string) => void;
// }

// export const RadioGroup: React.FC<RadioGroupProps> & {
//   Radio: typeof Radio;
// } = ({ children, name, value, onChange }) => {
//   const [selectedValue, setSelectedValue] = useState(value);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedValue(e.target.value);
//     if (onChange) {
//       onChange(e.target.value);
//     }
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         if (!React.isValidElement(child)) {
//           return null;
//         }
//         return React.cloneElement(child as React.ReactElement<any>, {
//           name,
//           checked: child.props.value === selectedValue,
//           onChange: handleChange,
//         });
//       })}
//     </div>
//   );
// };

// RadioGroup.Radio = Radio;
