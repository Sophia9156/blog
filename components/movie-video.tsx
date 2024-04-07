import { API_URL } from "@/app/(home)/page";

async function getVideos(id: string) {
  try {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

const MovieVideos: React.FC<{ id: string }> = async ({ id }) => {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
