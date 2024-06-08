import { Container, List } from './styles'
import Restaurants from '../Restaurants'
import { Restaurant } from '../pages/Home'

export type RestaurantProps = {
  infos: string
  id: number
  title: string
  description: string
  image: string
  rating: number
}

export type Props = {
  restaurant: Restaurant[]
}

const RestaurantsList = ({ restaurant }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.map((restaurant) => (
            <Restaurants
              id={restaurant.id}
              destacado
              image={restaurant.capa}
              button={restaurant.button}
              description={restaurant.descricao}
              infos={restaurant.tipo}
              rating={restaurant.avaliacao}
              tipo={restaurant.tipo}
              title={restaurant.titulo}
              key={restaurant.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
