import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSinglePost, deletePostById } from "../api/posts";
import useAuth from "../hooks/useAuth";

function SinglePost() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { postId } = useParams();
  console.log("The postId is", postId);
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    async function getPostById() {
      const listing = await fetchSinglePost(postId);
      setSinglePost(listing);
    }

    getPostById();
  }, []);
  async function handleDelete() {
    const result = await deletePostById(singlePost._id, token);
    navigate("/");
  }

  return (
    <div>
      <div>
        <h3>{singlePost.title}</h3>
        <h4>{singlePost.description}</h4>
        <h5>Price: {singlePost.price}</h5>
        <button onClick={handleDelete}>Thanos Snap</button>
      </div>
    </div>
  );
}

export default SinglePost;
