import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { SectionRoomWrapper } from './style'

const SectionRoom = memo((props) => {
  const { roomList = [] } = props
  return (
    <SectionRoomWrapper>
      {roomList.slice(0, -2).map((item) => (
        <div className="room" key={item.id}>
          <RoomItem info={item} />
        </div>
      ))}
    </SectionRoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList: PropTypes.array,
}

export default SectionRoom
