import React, { memo } from 'react'
import footerData from '@/assets/data/footer.json'
import { FooterWrapper } from './style'
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item) => (
            <div className="item" key={item.name}>
              <div className="title">{item.name}</div>
              <div className="hrfs">
                {item.list.map((item) => (
                  <a href={item.href} className="name" key={item.name}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="statement">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
