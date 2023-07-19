import { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import Card from '../Components/Card'
import Restaurant from '../../../model/Restaurant/Restaurant'
import { HomeMain } from './styles'

const HomePage = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])
  function tagArray(primary: string, secondary: boolean): string[] {
    const array: string[] = []
    if (secondary === true) {
      array.push('Destaque da semana')
      array.push(primary)
      return array
    }
    array.push(primary)
    return array
  }
  return (
    <>
      <Header />
      <HomeMain className="container">
        {restaurant.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            description={restaurant.descricao}
            extra_content={tagArray(restaurant.tipo, restaurant.destacado)}
            image={restaurant.capa}
            restaurant_name={restaurant.titulo}
            score={restaurant.avaliacao}
          />
        ))}
      </HomeMain>
    </>
  )
}

export default HomePage
