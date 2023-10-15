import styled from 'styled-components'

export const RoomItemWrapper = styled.div`
  /* width: 100%;
  height: 100%; */
  cursor: pointer;

  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verify_color};
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    margin: 8px 0;
  }
  .appraise {
    display: flex;
    align-items: center;
    font-size: 14px !important;
    .ant-rate {
      color: #00848a !important;
      font-size: 14px;
    }
    .cont {
      font-size: 12px;
      margin-left: 5px;
    }
  }
`
