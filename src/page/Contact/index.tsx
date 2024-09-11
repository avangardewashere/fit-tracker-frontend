.container {
    width: 100vw;
    height: 100%;
    background: white;
   
    display: flex;
    flex-direction: column;
  }
  
import style from "./index.module.scss"
import clsx from 'clsx'
const ContactPage = () => {
  return (
    <div className={clsx(style.container)}>
        this is the contactPage
    </div>
  )
}

export default ContactPage