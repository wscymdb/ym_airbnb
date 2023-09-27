import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  color: ${(props) => props.theme.textColor.primary};
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 25px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .info {
    position: relative;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 77px;
    height: 42px;
    margin-left: 10px;
    padding: 0px 5px;

    color: #717171;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-sizing: border-box;

    cursor: pointer;
    // 混入过渡效果
    ${(props) => props.theme.mixin.boxShadow}
  }
`
