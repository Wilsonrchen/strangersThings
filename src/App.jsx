import "./App.css";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getMe() {
      const result = await fetchMe(token);
      setUser(result.data);
    }
    if (token) {
      getMe();
    }
  }, [token]);

  return (
    <div className="App">
      <h4>{user?.username}</h4>
      <Register setToken={setToken} />
    </div>
  );
}

export default App;
