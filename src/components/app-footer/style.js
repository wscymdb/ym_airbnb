import styled from 'styled-components'

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;
  .wrapper {
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px;

    .service {
      display: flex;
      justify-content: space-between;
      .item {
        .title {
          font-weight: 700;
          margin-bottom: 20px;
        }
        .hrfs {
          display: flex;
          flex-direction: column;
          color: #767676;
          .name {
            margin: 5px 0;
            cursor: pointer;
          }
        }
      }
    }
    .statement {
      border-top: 1px solid #ebebeb;
      margin-top: 30px;
      padding-top: 20px;
      text-align: center;
      color: #767676;
    }
  }
`
