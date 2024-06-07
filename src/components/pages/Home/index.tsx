import RestaurantsList from '../../RestaurantsList'
import Restaurant from '../../models/Restaurant'
import japan from '../../../assets/sushi.png'
import tratoria from '../../../assets/pasta.png'
import Header from '../../Header'

const destaque: Restaurant[] = [
  {
    id: 1,
    title: 'Gohan Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japan,
    infos: ['Novidade'],
    rating: '4,9'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: tratoria,
    infos: ['Novidade'],
    rating: '4,9'
  },
  {
    id: 4,
    title: 'Gohan Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japan,
    infos: ['Novidade'],
    rating: '4,9'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: tratoria,
    infos: ['Novidade'],
    rating: '4,9'
  },
  {
    id: 6,
    title: 'Gohan Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japan,
    infos: ['Novidade'],
    rating: '4,9'
  },
  {
    id: 7,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: tratoria,
    infos: ['Novidade'],
    rating: '4,9'
  }
]

const Home = () => {
  return (
    <div>
      <Header />
      <RestaurantsList restaurant={destaque} />
    </div>
  )
}

export default Home
