import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: () => console.log("clicked!") },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    children: "Delete now",
    type: "warning",
  },
};

export const Disabled: Story = {
  args: {
    children: "Not Available",
    disabled: true,
  },
};
