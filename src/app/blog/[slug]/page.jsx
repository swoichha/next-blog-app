import Image from "next/image";
import styles from "./singlePostPage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>19.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ea aut
          fugiat quidem cumque voluptatibus facere tempora quam impedit fuga
          officia accusamus veniam nihil cupiditate alias possimus quis itaque
          fugit.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
