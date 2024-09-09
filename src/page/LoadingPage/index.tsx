import clsx from "clsx";
import style from "./index.module.scss";
import LogoImage from "../../component/logoComp";


const Loading = () => {
  return (
    <div className={clsx(style.loading)}>
     <LogoImage></LogoImage>

     <div className={clsx(style.loadingSection)}>
        <div className={clsx(style.loadingBar)}>
            <div className={clsx(style.progress)}>

            </div>
        </div>
        <span>Loading....</span>
  
     </div>
    </div>
  );
};

export default Loading;
