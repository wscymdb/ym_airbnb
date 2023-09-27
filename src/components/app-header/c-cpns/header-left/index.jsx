import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useLocation, useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  const location = useLocation()

  function goWhere() {
    if (location.pathname === '/home') return
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={(e) => goWhere()}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
