import { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUs: NextPage = () => {
  return (
    <div>
      <h1>About Us!</h1>
    </div>
  );
};

export default AboutUs;
