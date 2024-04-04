import { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Detail",
};

const MovieDetail: NextPage<{ params: { id: string } }> = ({ params }) => {
  return <h1>Movie Detail {params.id}</h1>;
};

export default MovieDetail;
