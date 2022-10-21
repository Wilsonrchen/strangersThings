export const fetchPosts = async () => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts`
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
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const fetchSinglePost = async (id) => {
  const response =
    await fetch`https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts`;
  const result = await response.json();
  const singlePost = result.data.posts.filter((element) => {
    return element._id == id;
  })[0];
  return singlePost;
};

export const deletePostById = async (id, token) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts/${id}`,
    {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const postMessages = async (id, token, content) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts/${id}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: { content },
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const editPost = async (title, description, price, token, id) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};
