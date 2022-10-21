import styles from "../styles/profile.module.css";
import Posts from "./Posts";
import UserPosts from "./UserPosts";

function Profile({ user }) {
  console.log(user);
  return (
    <div className={styles.profile}>
      <UserPosts user={user} />

      <div className={styles.messages}>
        <h2>Messages</h2>
      </div>

      <div className={styles.log}>
        {user?.messages?.map((message) => {
          console.log("I am the me:", message);
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
  <>
    <Posts />
  </>;
  console.log();
}

export default Profile;
