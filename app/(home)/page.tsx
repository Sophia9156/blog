import { API_URL } from "@/constants/api";
import { NextPage } from "next";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

const HomePage: NextPage = async () => {
  const movies = await getMovies();

  return (
    <div>
      <h1>Home!</h1>

      <div>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
