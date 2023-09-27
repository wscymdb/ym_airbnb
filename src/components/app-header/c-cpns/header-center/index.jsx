import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <span className="text">搜索房源和体验</span>
      <div className="search">
        <IconSearch />
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
