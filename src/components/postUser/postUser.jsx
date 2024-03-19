import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// FETCH DATA WITH API

// const getUserData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong during fetching data through API");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH API
  //   const user = await getUserData(userId);

  // FETCH DATA WITHOUT API

  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
};

export default PostUser;
