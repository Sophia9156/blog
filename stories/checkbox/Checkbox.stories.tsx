import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

interface TemplateProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Template: React.FC<TemplateProps> = ({ primary, size, disabled }) => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Checkbox
      primary={primary}
      size={size}
      label={"사람입니까?"}
      checked={checked}
      onChange={(checked) => setChecked(checked)}
      disabled={disabled}
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
