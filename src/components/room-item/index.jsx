import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWrapper } from './style'
import { Rate } from 'antd'

const RoomItem = memo((props) => {
  const { info } = props
  return (
    <RoomItemWrapper verify_color={info?.verify_info?.text_color || '#767676'}>
      <div className="cover">
        <img src={info.picture_url} alt="" />
      </div>
      <div className="desc">{info.verify_info?.messages?.join('·')}</div>
      <div className="title">{info.name}</div>
      <div className="price">{info.price_format}/晚</div>
      <div className="appraise">
        <Rate allowHalf value={info.star_rating ?? 5} disabled />
        {info.reviews_count}
        <div
          className="cont"
          style={{ color: info?.bottom_info?.content_color }}
        >
          {info?.bottom_info?.content}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  info: PropTypes.object,
}
RoomItem.defaultProps = {
  info: {},
}

export default RoomItem
