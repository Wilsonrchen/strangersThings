export const fetchPosts = async () => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts`,
  );
  const result = await response.json();
  return result.data.posts;
};

export const createPost = async (title, description, price, token) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
        title,
        description,
        price,
        }
      }),
    }
  );
  const result = await response.json();
  return result;
};
