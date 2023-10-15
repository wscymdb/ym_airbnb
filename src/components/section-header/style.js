import styled from 'styled-components'

export const SectionHeaderWrapper = styled.div`
  color: ${(props) => props.theme.textColor.secondary};
  .title,
  .subtitle {
    margin-bottom: 20px;
  }
  .subtitle {
    font-size: 16px;
  }
`
