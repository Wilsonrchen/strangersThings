import { useState, useEffect } from "react";
import { registerUser } from "../api/auth";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await registerUser(username, password);
          const token = result.data.token;
          localStorage.setItem("token", token);
          setToken(token);
        }}
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
