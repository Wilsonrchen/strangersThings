import { useState, useEffect } from "react";
import { registerUser } from "../api/auth";

import useAuth from "../hooks/useAuth";

export default function Register() {
  const { setToken } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          console.log({ username, password });
          const result = await registerUser(username, password);
          console.log(result);
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
