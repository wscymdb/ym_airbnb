import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconUser from '@/assets/svg/icon_user'
import HeaderPanel from '../header-panel'
const list = [
  {
    title: '注册',
  },
  {
    title: '登录',
    needBorder: true,
  },
  {
    title: '帮助中心',
  },
]

const HeaderRight = memo((props) => {
  // 组件内部状态
  const [showPanel, setShowPanel] = useState(false)

  // 副作用代码
  useEffect(() => {
    const fn = () => setShowPanel(false)

    // 设置捕获模式  因为点击info区域的时候事件会冒泡 先info中click设置为true 然后冒泡到window设置为false
    window.addEventListener('click', fn, true)

    return () => {
      window.removeEventListener('click', fn)
    }
  }, [])

  // 事件处理函数
  const handleItemClick = (name) => {
    console.log(name)
  }

  return (
    <RightWrapper>
      <div className="actions">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <div className="btn">
          <IconGlobal />
        </div>
      </div>
      <div className="info" onClick={(e) => setShowPanel(true)}>
        <IconMenu />
        <IconUser />
        {showPanel && (
          <HeaderPanel list={list} handleItemClick={handleItemClick} />
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
