import clsx from 'clsx'
import style from "./index.module.scss"
import { memo } from 'react'
import { Swiper } from 'antd-mobile'

const Promotional = memo(() => {
  return (
    <div className={clsx(style.promotional)}>
        <div className={clsx(style.title)}>
            This is the title
        </div>
        <div className={clsx(style.swiperSection)}>
            <Swiper   slideSize={88}>
                <Swiper.Item>
                    <div className={clsx(style.caroBanner)}>

                    </div>
                </Swiper.Item>
                <Swiper.Item>
                    <div className={clsx(style.caroBanner)}>

                    </div>
                </Swiper.Item>
                <Swiper.Item>
                    <div className={clsx(style.caroBanner)}>

                    </div>
                </Swiper.Item>
            </Swiper>
        </div>
    </div>
  )
})

export default Promotional