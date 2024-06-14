"use client";
import React from "react";
import { Select, Button, Checkbox } from "@/stories";

const ComponentTest = () => {
  const [value, setValue] = React.useState("korea");
  const [isChecked, setChecked] = React.useState(false);

  return (
    <div>
      {/* <Select primary value={value} onChange={(value) => setValue(value)}>
        <Select.Toggle />
        <Select.Menu>
          {[
            { label: "Korea 🇰🇷", value: "korea" },
            { label: "Australia 🇵🇳", value: "australia" },
            { label: "China 🇨🇳", value: "china" },
          ].map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Menu>
      </Select>
      <Button onClick={() => console.log("hi")}>버튼</Button> */}
      <Checkbox
        label="테스트"
        checked={isChecked}
        onChange={(checked) => setChecked(checked)}
      />
    </div>
  );
};

export default ComponentTest;
