import { Container, List } from './styles'
import Products from '../Products'

export type ProductProps = {
  id: number
  title: string
  description: string
  image: string
}

export type Props = {
  restaurant: ProductProps[]
}

const ProductList = ({ restaurant }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.map((restaurant) => (
            <Products
              key={restaurant.id}
              title={restaurant.title}
              description={restaurant.description}
              image={restaurant.image}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
