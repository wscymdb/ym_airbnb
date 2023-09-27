import styled from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 300px;
  height: 48px;
  padding: 0 10px 0 18px;

  font-weight: 600;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 24px;
  box-sizing: border-box;
  cursor: pointer;

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    color: #fff;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.primary};
  }

  ${(props) => props.theme.mixin.boxShadow}
`
