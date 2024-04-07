import { API_URL } from "@/app/(home)/page";
import MovieVideos from "@/components/movie-video";
import { NextPage } from "next";
import type { Metadata } from "next";
import { Suspense } from "react";

async function getMovie(id: string) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

interface IParams {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: IParams): Promise<Metadata> {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

const MovieDetailPage: NextPage<IParams> = async ({ params: { id } }) => {
  const movie = await getMovie(id);

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <h1>{movie.title}</h1>
      </Suspense>
      <Suspense fallback={<h1>Loading movie video...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetailPage;
