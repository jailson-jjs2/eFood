import Header from '../../../components/Header'
import ProductCard from '../Components/ProductCard'

import { MainKnowMore } from './styles'
import Menu from '../../../model/Menu/Menu'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Restaurant from '../../../model/Restaurant/Restaurant'
import { useGetRestaurantByIdQuery } from '../../../services/api'

const KnowMorePage = () => {
  const { id } = useParams()

  const [menu, setMenu] = useState<Menu[]>([])

  const { data: restaurant } = useGetRestaurantByIdQuery(id!)

  const cardapio = [restaurant?.cardapio]

  setMenu(cardapio)

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
