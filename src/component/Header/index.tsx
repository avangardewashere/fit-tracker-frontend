import clsx from "clsx"
import style from "./index.module.scss"
import LogoImage from "../logoComp"
import streakSvg  from "./../../assets/images/menu/streak.svg"
const Header = () => {
  return (
    <div className={clsx(style.header)}>
        <div className={clsx(style.logo)}>
            <LogoImage imgSize={40} textSize={16} />
        </div>
        <div className={clsx(style.streakBtn)}>
            <img src={streakSvg} alt="streak-btn" />
        </div>
    </div>
  )
}

export default Header