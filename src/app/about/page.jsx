import Image from "next/image";
import styles from "./about.modules.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19877487/pexels-photo-19877487/free-photo-of-sun-through-massive-redwood-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
