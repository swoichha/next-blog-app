import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ blogPost }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {blogPost && (
          <div className={styles.imgContainer}>
            <Image src={blogPost.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>19.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{blogPost.title}</h1>
        <p className={styles.desc}>{blogPost.body}</p>
        <Link className={styles.link} href={`/blog/${blogPost.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
