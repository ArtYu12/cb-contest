import styles from "@/styles/components/AvatarStack.module.css";

const AvatarStack = ({ images }) => {
  return (
    <div className={styles.avatarStack}>
      {images.map((image, index) => (
        <img
          key={index}
          className={styles.avatarStack__avatar}
          src={image.src}
          onClick={() => window.open(image.link, "_blank")}
          alt="Avatar"
        />
      ))}
    </div>
  );
};

export default AvatarStack;
