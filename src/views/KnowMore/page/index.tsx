import Header from '../../../components/Header'
import italia from '../../../assets/img/noodle.png'
import ProductCard from '../Components/ProductCard'

import pizza from '../../../assets/img/pizza.png'
import { MainKnowMore } from './styles'
import { Product } from '../model/Product'

const products: Product[] = [
  {
    id: 1,
    name_product: 'Italiana',
    image_product: pizza,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    name_product: 'Italiana',
    image_product: pizza,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    name_product: 'Italiana',
    image_product: pizza,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    name_product: 'Italiana',
    image_product: pizza,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    name_product: 'Italiana',
    image_product: pizza,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    name_product: 'Italiana',
    image_product: pizza,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const KnowMorePage = () => {
  return (
    <>
      <div>
        <Header
          image={italia}
          nationality="Italiana"
          restaurantname="La Dolce Vita Trattoria"
        />
        <MainKnowMore className="container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name_product={product.name_product}
              image_product={product.image_product}
              description_product={product.description_product}
            />
          ))}
        </MainKnowMore>
      </div>
    </>
  )
}

export default KnowMorePage
