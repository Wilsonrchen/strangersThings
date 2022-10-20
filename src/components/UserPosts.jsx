import { fetchPosts } from "../api/posts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Posts.module.css";

function UserPosts({user}) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const info = await fetchPosts();
      setPosts(info);
    }
    getPosts();
  }, []);
  const filterPosts = posts.filter (post => post.author._id === user._id)
  return (
   <div className={styles.profile}>
      <div className={styles.head}><h1><b>My Posts</b></h1></div>
      { filterPosts?.map((post)=>{
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <h6>{post.description}</h6>
            <h5>Price: {post.price}</h5>
            <h6>Seller: {post.author.username}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default UserPosts;