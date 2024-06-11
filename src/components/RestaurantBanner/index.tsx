import { useParams } from 'react-router-dom'
import { Image, Text, Title, Container } from './styles'
import { useGetBannerQuery } from '../../services/api'

const RestaurantBanner = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetBannerQuery(id!)

  return (
    <Image style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="container">
        <Container>
          <div>
            <Text>{restaurant?.tipo}</Text>
          </div>
          <div>
            <Title>{restaurant?.titulo}</Title>
          </div>
        </Container>
      </div>
    </Image>
  )
}

export default RestaurantBanner
