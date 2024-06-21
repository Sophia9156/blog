import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export interface CarouselProps {
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  indicator?: boolean;
  indicatorPosition?: "top" | "bottom" | "left" | "right";
  draggable?: boolean;
  infinite?: boolean;
  children: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({
  arrows = true,
  autoplay = false,
  autoplaySpeed = 3000,
  indicator = true,
  indicatorPosition = "bottom",
  draggable = true,
  infinite = false,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = children.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          infinite
            ? (prevIndex + 1) % length
            : Math.min(prevIndex + 1, length - 1)
        );
      }, autoplaySpeed);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, autoplaySpeed, infinite, length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    goToSlide(
      infinite
        ? (currentIndex + 1) % length
        : Math.min(currentIndex + 1, length - 1)
    );
  };

  const prevSlide = () => {
    goToSlide(
      infinite
        ? (currentIndex - 1 + length) % length
        : Math.max(currentIndex - 1, 0)
    );
  };

  return (
    <CarouselContainer>
      <CarouselWrapper
        draggable={draggable}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouselWrapper>
      {arrows && (
        <>
          <Arrow direction="left" onClick={prevSlide}>
            ◀
          </Arrow>
          <Arrow direction="right" onClick={nextSlide}>
            ▶
          </Arrow>
        </>
      )}
      {indicator && (
        <Indicators position={indicatorPosition}>
          {children.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Indicators>
      )}
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselWrapper = styled.div<{ draggable: boolean }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  cursor: ${({ draggable }) => (draggable ? "grab" : "default")};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const Arrow = styled.div<{ direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => direction}: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

const Indicators = styled.div<{
  position: "top" | "bottom" | "left" | "right";
}>`
  position: absolute;
  display: flex;
  ${({ position }) => position}: 10px;
  left: ${({ position }) =>
    position === "top" || position === "bottom" ? "50%" : "10px"};
  transform: ${({ position }) =>
    position === "top" || position === "bottom" ? "translateX(-50%)" : "none"};
  flex-direction: ${({ position }) =>
    position === "left" || position === "right" ? "column" : "row"};
`;

const Indicator = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background: ${({ active }) => (active ? "black" : "gray")};
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
`;
