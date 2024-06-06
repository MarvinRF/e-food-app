import { Container, List } from './styles'
import Restaurants from '../Restaurants'

export type RestaurantProps = {
  infos: string[]
  id: number
  title: string
  description: string
  image: string
  rating: string
}

export type Props = {
  restaurant: RestaurantProps[]
}

const RestaurantsList = ({ restaurant }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.map((restaurant) => (
            <Restaurants
              key={restaurant.id}
              title={restaurant.title}
              description={restaurant.description}
              image={restaurant.image}
              infos={restaurant.infos}
              rating={restaurant.rating}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
