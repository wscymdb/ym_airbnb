import React, { memo } from 'react'
import { BannerWrapper } from './style'

import { Carousel } from 'antd'

const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      <Carousel autoplay>
        {[1, 2, 3].map((item) => (
          <div className="item" key={item}>
            <img src={require('@/assets/img/cover_01.jpeg')} alt="" />
          </div>
        ))}
      </Carousel>
    </BannerWrapper>
  )
})

export default HomeBanner
