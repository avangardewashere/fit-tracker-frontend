import clsx from "clsx";
import style from "./index.module.scss";
import Footer from "../../component/Footer";
 
import Header from "../../component/Header";

const AccountPage = () => {
  return (
    <div className={clsx(style.container)}>
      <Header hideStreak></Header>
      <br />
      <div className={clsx(style.accountCard)}>Profile Account Card</div>
      <br />
      <div className={clsx(style.accountMenu)}>
        <div className={style.listTitle}>
            General Settings
        </div>
        <div className={clsx(style.listItem)}>
        Account  
        </div>
        <div className={clsx(style.listItem)}>
        Application 
        </div>
      </div>
      <br />
       <Footer />
    </div>
  );
};

export default AccountPage;
