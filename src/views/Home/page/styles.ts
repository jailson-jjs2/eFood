import styled from 'styled-components'

export const HomeMain = styled.main`
  padding-top: 70px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`
