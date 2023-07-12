import { ProductCardContainer } from './styles'

type PropsProduct = {
  name_product: string
  image_product: string
  description_product: string
}

export default function ProductCard({
  name_product,
  image_product,
  description_product
}: PropsProduct) {
  return (
    <ProductCardContainer>
      <img src={image_product} alt={name_product} />
      <h2>{name_product}</h2>
      <p>{description_product}</p>
      <button type="button">Adicionar ao carrinho</button>
    </ProductCardContainer>
  )
}
