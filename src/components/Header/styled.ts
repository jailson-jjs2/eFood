import styled from 'styled-components'
import backgroundHEader from '../../assets/Logo-Efood/header-background.svg'
import { PropsHeader } from '.'
import { Link } from 'react-router-dom'
import { Colors } from '../../main-styles'

export const HeaderTitle = styled.h2`
  font-size: 36px;
  font-weight: 900;
`
export const LinkButton = styled(Link)`
  font-size: 18px;
  color: ${Colors.textPrimary};
`
export const HeaderBanner = styled.div<
  Omit<PropsHeader, 'typeheader' | 'nationality' | 'restaurantname'>
>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 280px;
  position: relative;

  h2,
  h3 {
    color: ${Colors.textSecondary};
    font-size: 32px;
  }

  h2 {
    font-weight: 100;
  }

  h3 {
    position: absolute;
    bottom: 32px;
    font-weight: bold;
  }
`

export const HeaderContaner = styled.header<PropsHeader>`
  background-image: url(${backgroundHEader});
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => (props.typeheader === 'normal' ? '384px' : 'auto')};

  ${HeaderTitle} {
    display: ${(props) => (props.typeheader === 'normal' ? 'initial' : 'none')};
  }

  ${LinkButton} {
    display: ${(props) => (props.typeheader === 'normal' ? 'none' : 'initial')};
  }

  .container {
    padding-top: 54px;
    text-align: center;
    nav {
      margin-bottom: ${(props) =>
        props.typeheader === 'normal' ? '130px' : '65px'};
      display: flex;
      align-items: center;
      justify-content: ${(props) =>
        props.typeheader === 'normal' ? 'center' : 'space-between'};
    }
  }

  ${HeaderBanner} > .container {
    text-align: left;
    padding: 0;
    padding-top: 24px;
  }

  ${HeaderBanner} {
    display: ${(props) => (props.typeheader === 'normal' ? 'none' : 'flex')};
  }
`
