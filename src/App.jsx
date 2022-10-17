import "./App.css";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import useAuth from "./hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import NewPost from "./components/CreatePosts";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <h4>Welcome, {user?.username}</h4>
      <NavBar />

      <Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreatePosts" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
