import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>19.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facilis veritatis nobis, quod eum eaque reiciendis nesciunt in laborum
          dolorem. Molestiae maxime sapiente iusto earum. Deleniti cupiditate
          rerum velit voluptatum.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
