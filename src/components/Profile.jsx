import { useEffect, useState } from "react";
import { fetchMe } from "../api/auth";

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
    <div>
      <h2>Messages</h2>
      <div>
        {user?.messages?.map((message) => {
          console.log("I am the me:", message);
          return (
            <div>
              {message.content} Sent by: {message.fromUser.username}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
