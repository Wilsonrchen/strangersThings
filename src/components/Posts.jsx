import { fetchPosts } from "../api/posts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const info = await fetchPosts();
      setPosts(info);
    }
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <h4>{post.description}</h4>
            <h5>Price: {post.price}</h5>
            <h6>Seller: {post.author.username}</h6>
            <button
              onClick={() => {
                navigate(`/posts/${post._id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
