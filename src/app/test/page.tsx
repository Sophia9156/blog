"use client";
import React from "react";
import { Select, Button } from "@/stories";

const Test: React.FC = () => {
  const options = [
    { label: "Korea 🇰🇷", value: "korea" },
    { label: "Japan 🇯🇵", value: "japan" },
    { label: "China 🇨🇳", value: "china" },
  ];
  const [value, setValue] = React.useState("korea");

  return (
    <div>
      {/* <Select
        primary
        value={value}
        onChange={(value) => setValue(value)}>
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
      </Select> */}
      <Button onClick={() => console.log("hi")}>버튼</Button>
    </div>
  );
};

export default Test;
