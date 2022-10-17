import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";
export default function NewPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div>
      <h3>Create a Post </h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(title, description, price);
          navigate("/Posts");
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
