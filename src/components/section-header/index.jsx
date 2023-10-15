import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'
import PropTypes from 'prop-types'

const SectionHeader = memo((props) => {
  return (
    <SectionHeaderWrapper>
      <h2 className="title">{props.title}</h2>
      <div className="subtitle">{props.subtitle}</div>
    </SectionHeaderWrapper>
  )
})

// props校验
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
// props默认值
SectionHeader.defaultProps = {
  title: '我是标题',
  // subtitle: '我是副标题',
}
export default SectionHeader
