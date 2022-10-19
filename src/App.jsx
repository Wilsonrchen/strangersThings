import "./App.css";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import useAuth from "./hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import NewPost from "./components/CreatePosts";
import SinglePost from "./components/SinglePost";

function App() {
  const { setToken, user } = useAuth();
  return (
    <div className="App">
      <NavBar user={user} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/auth/:method" element={<Auth setToken={setToken} />} />
        <Route path="/CreatePosts" element={<NewPost />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
