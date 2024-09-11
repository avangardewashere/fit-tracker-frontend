import styles from "./index.module.scss";
import clsx from "clsx";
import homeSvg from "./../../assets/images/menu/home.svg";
import ConsultSvg from "./../../assets/images/menu/home.svg";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Footer = memo(() => {
  const navigate = useNavigate();

  
  return (
    <div className={clsx(styles.footer)}>
      <div className={clsx(styles.menuIcon)}>
        <div className={clsx(styles.activeMenu)}></div>
        <img src={homeSvg} alt="menu-icon" onClick={() => navigate("/")} />
        <span>Home</span>
      </div>

      <div className={clsx(styles.menuIcon)}>
        <img src={ConsultSvg} alt="menu-icon" />
        <span>Consult</span>
      </div>

      <div className={clsx(styles.menuIcon)}>
        <img src={homeSvg} alt="menu-icon" />
        <span>Explore</span>
      </div>

      <div className={clsx(styles.menuIcon)}>
        <img src={homeSvg} alt="menu-icon" />
        <span>Favorites</span>
      </div>

      <div
        className={clsx(styles.menuIcon)}
        onClick={() => navigate("/account")}
      >
        <img src={homeSvg} alt="menu-icon" />
        <span>Account</span>
      </div>
    </div>
  );
});

export default Footer;
