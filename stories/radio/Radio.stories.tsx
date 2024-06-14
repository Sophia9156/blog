// components/Radio.stories.tsx
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from ".";

const meta = {
  title: "Example/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

interface TemplateProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Template: React.FC<TemplateProps> = ({ primary, size, disabled }) => {
  const [value, setValue] = useState("male");

  const options = [
    { label: "남자", value: "male" },
    { label: "여자", value: "female" },
  ];

  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          primary={primary}
          size={size}
          name="exampleGroup"
          value={option.value}
          checked={option.value === value}
          label={option.label}
          onChange={(value) => {
            console.log(value);
            setValue(value);
          }}
          disabled={disabled}
        />
      ))}
    </div>
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
