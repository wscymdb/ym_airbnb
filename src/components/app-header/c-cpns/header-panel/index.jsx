import React, { memo } from 'react'
import { PanelWrapper } from './style'
import classNames from 'classnames'

const HeaderPanel = memo((props) => {
  return (
    <PanelWrapper>
      {props?.list.map((item) => (
        <div
          className={classNames('item', { bb: item.needBorder })}
          key={item.title}
          onClick={(e) => props.handleItemClick(item.title)}
        >
          {item.title}
        </div>
      ))}
    </PanelWrapper>
  )
})

export default HeaderPanel
