import Header from '../../../components/Header'
import Card from '../Components/Card'
import imageSushi from '../../../assets/img/sushi.png'
import imageItaliana from '../../../assets/img/noodle.png'
import { HomeMain } from './styles'
import Restaurant from '../model/Product'

const restarant: Restaurant[] = [
  {
    id: 1,
    score: '4.9',
    extra_content: ['Destaque da semana', 'Japonesa'],
    image: imageSushi,
    restaurant_name: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    score: '4.6',
    extra_content: ['Italiana'],
    image: imageItaliana,
    restaurant_name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    score: '4.6',
    extra_content: ['Italiana'],
    image: imageItaliana,
    restaurant_name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    score: '4.6',
    extra_content: ['Italiana'],
    image: imageItaliana,
    restaurant_name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    score: '4.6',
    extra_content: ['Italiana'],
    image: imageItaliana,
    restaurant_name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    score: '4.6',
    extra_content: ['Italiana'],
    image: imageItaliana,
    restaurant_name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeMain className="container">
        {restarant.map((restarant) => (
          <Card
            key={restarant.id}
            description={restarant.description}
            extra_content={restarant.extra_content}
            image={restarant.image}
            restaurant_name={restarant.restaurant_name}
            score={restarant.score}
          />
        ))}
      </HomeMain>
    </>
  )
}

export default HomePage
