import Header from '../../../components/Header'
import ProductCard from '../Components/ProductCard'

import { MainKnowMore } from './styles'
import Menu from '../../../model/Menu/Menu'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Restaurant from '../../../model/Restaurant/Restaurant'

const KnowMorePage = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [menu, setMenu] = useState<Menu[]>([])
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const { cardapio } = res
        setMenu(cardapio)
        setRestaurant(res)
      })
  })

  return (
    <>
      <div>
        <Header
          image={restaurant?.capa}
          nationality={restaurant?.tipo}
          restaurantname={restaurant?.titulo}
        />
        <MainKnowMore className="container">
          {menu.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              porcao={product.porcao}
              preco={product.preco}
              nome={product.nome}
              foto={product.foto}
              descricao={product.descricao}
            />
          ))}
        </MainKnowMore>
      </div>
    </>
  )
}

export default KnowMorePage
