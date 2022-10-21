import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSinglePost, deletePostById, postMessages } from "../api/posts";
import useAuth from "../hooks/useAuth";

function SinglePost() {
  const navigate = useNavigate();
  const { token, user } = useAuth();
  const { postId } = useParams();
  console.log("The postId is", postId);
  const [singlePost, setSinglePost] = useState({});
  const [content, setContent] = useState();

  useEffect(() => {
    async function getPostById() {
      const listing = await fetchSinglePost(postId);
      setSinglePost(listing);
    }

    getPostById();
  }, []);

  return (
    <div>
      <div>
        <h3>{singlePost.title}</h3>
        <h4>{singlePost.description}</h4>
        <h5>Price: {singlePost.price}</h5>
        {user?._id === singlePost.author?._id && (
          <button
            onClick={async () => {
              await deletePostById(singlePost._id, token);
              navigate("/");
            }}
          >
            Thanos Snap
          </button>
        )}
      </div>
      <div>
        {user?._id === singlePost.author?._id && (
          <button
            onClick={async () => {
              navigate(`/Update/${singlePost._id}`);
            }}
          >
            Edit
          </button>
        )}
      </div>

      <div>
        <h3>Leave a Message</h3>
        <h4>{singlePost.messages}</h4>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const result = await postMessages(singlePost._id, token, content);
            console.log(result);

            navigate("/");
          }}
        >
          <input
            type="text"
            placeholder="Message"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></input>
          {user?._id !== singlePost.author?._id && (
            <button type="submit"> Submit</button>
          )}
          {user?._id === singlePost.author?._id && (
            <h5>Cannot send messages to yourself</h5>
          )}
        </form>
      </div>
    </div>
  );
}

export default SinglePost;
