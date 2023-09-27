import styled from 'styled-components'

export const PanelWrapper = styled.div`
  position: absolute;
  top: 53px;
  right: -6px;
  z-index: 99999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 159px;
  padding: 20px 0;

  border-radius: 18px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 1px 10px #ccc;

  .item {
    flex: 1;
    padding: 10px 15px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f6f6f6;
      color: #000;
    }
  }
  .bb {
    border-bottom: 1px solid #efefef;
  }
`
