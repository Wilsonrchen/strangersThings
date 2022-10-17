export const fetchPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts"
  );
  const result = await response.json();
  return result.data.posts;
};

export const createPost = async (title, description, price) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts`,
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    }
  );
  const result = await response.json();
  return result;
};
