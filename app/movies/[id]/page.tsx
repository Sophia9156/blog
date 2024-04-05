import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-video";
import { NextPage } from "next";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Movie Detail",
};

const MovieDetailPage: NextPage<{ params: { id: string } }> = ({
  params: { id },
}) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetailPage;
