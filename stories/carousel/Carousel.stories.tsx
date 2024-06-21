import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselProps } from ".";
import styled from "styled-components";

const meta = {
  title: "Example/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const CarouselItem = styled.div`
  background-color: #eee;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: React.FC<Omit<CarouselProps, "children">> = (args) => (
  <Carousel {...args}>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </Carousel>
);

const args = {
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  indicator: true,
  indicatorPosition: "bottom" as const,
  draggable: true,
  infinite: true,
};

export const Default: Story = {
  render: () => <Template {...args} />,
};
