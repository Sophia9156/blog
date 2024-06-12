"use client";
import React from "react";
import { Select, Button } from "@/stories";

const ComponentTest = () => {
  const options = [
    { label: "Korea 🇰🇷", value: "korea" },
    { label: "Australia 🇵🇳", value: "australia" },
    { label: "China 🇨🇳", value: "china" },
  ];
  const [value, setValue] = React.useState("korea");

  return (
    <div>
      <Select primary value={value} onChange={(value) => setValue(value)}>
        <Select.Toggle />
        <Select.Menu>
          {options.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Menu>
      </Select>
      <Button onClick={() => console.log("hi")}>버튼</Button>
    </div>
  );
};

export default ComponentTest;
