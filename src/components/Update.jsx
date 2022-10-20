import { useState } from "react";
import { editPost } from "../api/posts";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Update() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const { postId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  console.log("the id", postId);

  return (
    <>
      <h3>Edit Post </h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await editPost(
            title,
            description,
            price,
            token,
            postId
          );
          navigate("/");
          console.log("this is the result", result);
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
