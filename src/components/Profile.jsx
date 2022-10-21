import styles from "../styles/profile.module.css";
import UserPosts from "./UserPosts";
import logo from "./profile.jpeg";

function Profile({ user }) {
  return (
    <div className={styles.profile}>
      <div className={styles.photo}>
        <img src={logo} height={300} width={300} alt="Logo" />
      </div>
      <UserPosts user={user} />

      <div className={styles.messages}>
        <h2>Messages</h2>
      </div>

      <div className={styles.log}>
        {user?.messages?.map((message) => {
          return (
            <div>
              <h3>{message.post.title}</h3>
              <div className={styles.message}>{message.content}</div>
              <div className={styles.from}>
                {" "}
                Sent by: {message.fromUser.username}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
