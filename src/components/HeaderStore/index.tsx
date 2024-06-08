import logo from '../../assets/logo.png'
import {
  Imagem,
  Logo,
  Title,
  ContentContainer,
  RestaurantBanner,
  RestaurantBannerContainer,
  Overlay,
  TitleBanner,
  TextBanner,
  LinkCart
} from './styles'
import background from '../../assets/background-header.png'
import carrinho from '../../assets/carrinho.svg'
import { Restaurant } from '../pages/Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const HeaderStore = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])
  return (
    <>
      <Imagem style={{ backgroundImage: `url(${background}) ` }}>
        <ContentContainer>
          <LinkCart href="/">
            <Title>Restaurantes</Title>
          </LinkCart>
          <Logo src={logo} alt="Efood" />
          <LinkCart href="/">
            <Title>0 produto(s) no carrinho</Title>
            <img src={carrinho} alt="Carrinho" />
          </LinkCart>
        </ContentContainer>
      </Imagem>
      <RestaurantBanner
        style={{ backgroundImage: `url(${restaurant?.capa}) ` }}
      >
        <RestaurantBannerContainer>
          <TextBanner>{restaurant?.tipo}</TextBanner>
          <TitleBanner>{restaurant?.titulo}</TitleBanner>
        </RestaurantBannerContainer>
      </RestaurantBanner>
      <Overlay />
    </>
  )
}

export default HeaderStore
