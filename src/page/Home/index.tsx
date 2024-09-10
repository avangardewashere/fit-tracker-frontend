import Goal from '../../component/Body/Goal'
import Promotional from '../../component/Body/Promotional'
import WorkoutSection from '../../component/Body/Workout'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import style from './index.module.scss'
import clsx  from "clsx"

const HomePage = () => {
  return (
    <div className={clsx(style.homePage)} >
        <Header />
        <Goal />
        <br />
        <Promotional />
        <br />
        <WorkoutSection />
        <Footer />
    </div>
  )
}

export default HomePage