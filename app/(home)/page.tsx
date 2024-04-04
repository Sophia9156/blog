import { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

export default Home;
