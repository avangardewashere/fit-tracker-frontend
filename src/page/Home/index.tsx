import Footer from '../../component/Footer'
import Header from '../../component/Header'
import style from './index.module.scss'
import clsx  from "clsx"

const HomePage = () => {
  return (
    <div className={clsx(style.homePage)}>
        <Header />
        <span>HomePage</span>
         <Footer />
    </div>
  )
}

export default HomePage