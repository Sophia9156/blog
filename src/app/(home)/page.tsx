import { getPosts } from "@/api/test";
import { Button } from "@mui/material";
import { NextPage } from "next";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage: NextPage = async () => {
  const data = await getPosts();

  return (
    <Suspense fallback={"Loading..."}>
      <h1>Done.</h1>
      <div>
        {data.map((i: any) => (
          <div key={i.id}>
            <h5>{i.title}</h5>
          </div>
        ))}
      </div>
      <Button variant="contained">Contained</Button>
    </Suspense>
  );
};

export default HomePage;
