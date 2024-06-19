import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

interface TemplateProps {
  type?: "email" | "text" | "number" | "password";
  primary?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  showCount?: boolean;
  maxLength?: number;
  allowClear?: boolean;
}

const Template: React.FC<TemplateProps> = ({
  type,
  primary,
  size,
  disabled,
  showCount,
  maxLength,
  allowClear,
}) => {
  const [text, setText] = React.useState("");

  return (
    <Input
      type={type}
      primary={primary}
      size={size}
      value={text}
      onChange={(value) => setText(value)}
      disabled={disabled}
      showCount={showCount}
      maxLength={maxLength}
      allowClear={allowClear}
    />
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

export const ShowCount: Story = {
  render: () => <Template showCount />,
};

export const MaxLength: Story = {
  render: () => <Template showCount maxLength={10} />,
};

export const AllowClear: Story = {
  render: () => <Template allowClear={true} />,
};

export const InputNumber: Story = {
  render: () => <Template type="number" />,
};

export const InputPassword: Story = {
  render: () => <Template type="password" />,
};
