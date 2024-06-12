import React from "react";
import { NextPage } from "next";
import type { Metadata } from "next";
import ComponentTest from "./ComponentTest";

export const metadata: Metadata = {
  title: "Test",
};

const Test: NextPage = () => {
  return (
    <div>
      <ComponentTest />
    </div>
  );
};

export default Test;
