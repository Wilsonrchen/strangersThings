import "./App.css";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import useAuth from "./hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import NewPost from "./components/CreatePosts";
import SinglePost from "./components/SinglePost";
import Profile from "./components/Profile";

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
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
