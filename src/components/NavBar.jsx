import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Stranger's Things </h1>
      <Link to="/Posts">Home</Link>
      <Link to="/CreatePosts">Create A Post</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Login-Logout">Login/Logout</Link>
      <Link to="/Register">Register</Link>
    </nav>
  );
}

export default NavBar;
