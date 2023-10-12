import style_features from "@/styles/Features.module.css";

const Coin = ({ children, ...props }) => {
  return (
    <div className={`${style_features.features__card1__assets__item}`}>
      <img src={`/main/${children}.svg`} alt={children} />
      <div className={`${style_features.features__card1__assets__item__name}`}>
        {children}
      </div>
    </div>
  );
};

export default Coin;
