import clsx from "clsx"
import style from "./index.module.scss"
import LogoImage from "../logoComp"

const Header = () => {
  return (
    <div className={clsx(style.header)}>
        <div className={clsx(style.logo)}>
            <LogoImage imgSize={40} textSize={16} />
        </div>
        <div className={clsx(style.streakBtn)}>

        </div>
    </div>
  )
}

export default Header