import styled from 'styled-components'
import { Colors } from '../../../../main-styles'

export const ProductCardContainer = styled.div`
  background-color: ${Colors.ProductCardBackground};
  width: 320px;
  height: 338px;
  padding: 8px;
  text-align: left;
  color: ${Colors.textSecondary};
  position: relative;

  img {
    width: 100%;
    height: 167px;
  }

  h2 {
    margin-top: 8px;
    font-size: 16px;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    height: 88px;
    line-height: 1.2;
  }

  button {
    background-color: ${Colors.backgroundButtonProduct};
    color: ${Colors.textPrimary};
    padding: 4px 0;
    width: calc(100% - 16px);
    border: none;
    font-weight: bold;
    position: absolute;
    bottom: 8px;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
  }
`
