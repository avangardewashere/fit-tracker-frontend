import clsx from "clsx"
import style from "./index.module.scss"
import logoImg from "./../../assets/logo.svg";
const LogoImage = () => {
  return (
    <div className={clsx(style.logoImage)}>
   
    <img src={logoImg} alt="loading-page" />
    <div className={clsx(style.logoText)}>
      Fit<span>Up</span>
    </div>
  </div>
  )
}

export default LogoImage