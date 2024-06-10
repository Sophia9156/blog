import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

interface TemplateProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Template: React.FC<TemplateProps> = ({ primary, size, disabled }) => {
  const options = [
    { label: "딸기 🍓", value: "strawberry" },
    { label: "사과 🍎", value: "apple" },
    { label: "포도 🍇", value: "grapes" },
  ];
  const [value, setValue] = useState("strawberry");

  return (
    <Select
      primary={primary}
      size={size}
      value={value}
      onChange={(value) => setValue(value)}
      disabled={disabled}>
      <Select.Toggle />
      <Select.Menu>
        {options.map((option) => (
          <Select.Item
            key={option.value}
            value={option.value}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Menu>
    </Select>
  );
};

export const Primary: Story = {
  render: () => <Template primary={true} />,
};

export const Default: Story = {
  render: () => <Template />,
};

export const Large: Story = {
  render: () => <Template size="large" />,
};

export const Small: Story = {
  render: () => <Template size="small" />,
};

export const Disabled: Story = {
  render: () => <Template disabled={true} />,
};
