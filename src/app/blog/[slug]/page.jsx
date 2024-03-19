import Image from "next/image";
import styles from "./singlePostPage.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH API

// const getBlogData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong during fetching data through API");
//   }
//   return res.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const blogPost = await getPost(slug);

  return {
    title: blogPost.title,
    description: blogPost.desc,
  };
};
const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // FETCH DATA WITH API
  // const blogPost = await getBlogData(slug);

  // FETCH DATA WITHOUT API
  const blogPost = await getPost(slug);
  return (
    <div className={styles.container}>
      {blogPost.img && (
        <div className={styles.imgContainer}>
          <Image src={blogPost.img} fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{blogPost.title}</h1>
        <div className={styles.detail}>
          {blogPost && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={blogPost.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {blogPost.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{blogPost.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
