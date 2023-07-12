import styled from 'styled-components'

export const MainKnowMore = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`
