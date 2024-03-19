import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

const getBlogListData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "no-store",
    next: { revalidate: 1300 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong during fetching data through API");
  }
  return res.json();
};

const BlogPage = async () => {
  const blogPosts = await getBlogListData();

  return (
    <div className={styles.container}>
      {blogPosts.map((blogPost) => (
        <div className={styles.blogPost} key={blogPost.id}>
          <PostCard blogPost={blogPost} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
