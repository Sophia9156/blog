import instance from ".";

export const getPosts = async () => {
  try {
    const res = await instance.get("/posts");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
