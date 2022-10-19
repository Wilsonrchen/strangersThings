import styles from "../styles/profile.module.css";
import useAuth from "../hooks/useAuth";

function Profile({ user }) {
  console.log(user);
  //   const [profile, setProfile] = useState([]);

  //   useEffect(() => {
  //     async function getMessages() {
  //       const details = await fetchMe();
  //       setProfile(details);
  //     }
  //   }, []);
  return (
    <div className={styles.profile}>
      <div className={styles.messages}>
        <h2>Messages</h2>
      </div>
      <div className={styles.log}>
        {user?.messages?.map((message) => {
          console.log("I am the me:", message);
          return (
            <div>
              <h3>{message.post.title}</h3>
              {message.content}
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
