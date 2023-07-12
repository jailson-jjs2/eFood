import { HeaderBanner, HeaderContaner, HeaderTitle, LinkButton } from './styled'

import logoEfood from '../../assets/Logo-Efood/logo-efood.svg'

import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export type PropsHeader = {
  typeheader?: string
  nationality?: string
  image?: string
  restaurantname?: string
}

const Header = ({ nationality, image, restaurantname }: PropsHeader) => {
  const [typeHeader, setTypeHeader] = useState('normal')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/KnowMore') {
      setTypeHeader('customized')
    } else if (location.pathname !== '/KnowMore') {
      setTypeHeader('normal')
    }
  }, [location])

  return (
    <HeaderContaner typeheader={typeHeader}>
      <div className="container">
        <nav>
          <LinkButton to="/">Restaurantes</LinkButton>
          <Link to="/">
            <h1>
              <img src={logoEfood} alt="efood" />
            </h1>
          </Link>
          <LinkButton to="/KnowMore">0 produto(s) no carrinho</LinkButton>
        </nav>
        <HeaderTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </HeaderTitle>
      </div>
      <HeaderBanner image={image}>
        <div className="container">
          <h2>{nationality}</h2>
          <h3>{restaurantname}</h3>
        </div>
      </HeaderBanner>
    </HeaderContaner>
  )
}

export default Header
