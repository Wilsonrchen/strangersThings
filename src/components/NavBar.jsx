import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import Nav from "react-bootstrap/Nav";
import logo from './stranger.png';

// import useAuth from "../hooks/useAuth";
// import { useReducer } from "react";
// import { Button } from "bootstrap";

console.log(logo);


export default function NavBar({ user, setToken }) {
  return (
    <Nav className={styles.background}>
        <div className={styles.header}><div className={styles.logo}><img src={logo} height={50} width={400} alt="Logo"/></div>
      <div className={styles.welcome}><Nav.Item>Welcome, {user.username}</Nav.Item></div></div> 
      <Nav.Item>
        <Link className={styles.text} to="/"> Home</Link>
      </Nav.Item>
      {user.username === "Guest" ? (
        <>
          {" "}
          <Nav.Item>
            <Link className={styles.text} to="/auth/login">
              Login
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={styles.text} to="/auth/register">
              Register
            </Link>
          </Nav.Item>
        </>
      ) : null}

      {user.username !== "Guest" ? (
        <>
          <Nav.Item>
            <Link className={styles.text}
              onClick={() => {
                localStorage.removeItem("token");
                setToken("");
              }}
            >
              Log Out
            </Link>
          </Nav.Item>
        </>
      ) : null}
      <Nav.Item>
        <Link className={styles.text} to="/CreatePosts">
          Create A Post
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={styles.text} to="/Profile">
          Profile
        </Link>
      </Nav.Item>
    </Nav>
  );
}



