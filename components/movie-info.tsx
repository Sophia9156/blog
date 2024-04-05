import { API_URL } from "@/app/(home)/page";

async function getMovie(id: string) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

const MovieInfo: React.FC<{ id: string }> = async ({ id }) => {
  const movie = await getMovie(id);

  return <h1>Movie Detail {movie.title}</h1>;
};

export default MovieInfo;
