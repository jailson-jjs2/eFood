import styled from 'styled-components'
import { Colors } from '../../main-styles'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${Colors.footerBackground};
  text-align: center;
  padding-top: 40px;
  margin-top: 120px;

  nav {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 80px;
  }

  p {
    font-size: 10px;
    width: 480px;
    display: block;
    margin: 0 auto;
  }
`
export const LinkFooter = styled.a`
  width: 24px;
  height: 24px;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
  }
`

export const ParagraphFooter = styled.p`
  color: ${Colors.textPrimary};
  font-size: 10px;
`
