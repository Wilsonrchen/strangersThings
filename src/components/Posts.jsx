import { fetchPosts } from "../api/posts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Posts.module.css";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getPosts() {
      const info = await fetchPosts();
      setPosts(info);
    }
    getPosts();
  }, []);

  function postMatches(post, text) {
    return post.title.toLowerCase().includes(text);
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div className={styles.Posts}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.head}>
        <h1>
          <b>Posts</b>
        </h1>
      </div>
      {postsToDisplay.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <h6>{post.description}</h6>
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
