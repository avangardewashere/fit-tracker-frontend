import Footer from '../../component/Footer'
import style from './index.module.scss'
import clsx  from "clsx"

const HomePage = () => {
  return (
    <div className={clsx(style.homePage)}>
        <span>HomePage</span>
         <Footer />
    </div>
  )
}

export default HomePage