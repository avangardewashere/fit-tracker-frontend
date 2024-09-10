import clsx from "clsx"
import style from "./index.module.scss"
import logoImg from "./../../assets/logo.svg";
import { memo } from "react";

interface LogoImageProps {
  imgSize?:number
  textSize?:number
}

const LogoImage:React.FC<LogoImageProps> = memo((props) => {
    const {imgSize, textSize} = props;
  return (
    <div className={clsx(style.logoImage)}>
    <img style={{width:imgSize ?? "75rem",height: imgSize ? imgSize/3 : "25rem"}} src={logoImg} alt="loading-page" />
    <div  style={{fontSize:textSize?? "24rem"}} className={clsx(style.logoText)}>
      Fit<span >Up</span>
    </div>
  </div>
  )
})

export default LogoImage