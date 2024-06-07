import React from 'react'
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
import tratoria from '../../assets/tratoria_banner.png'
import carrinho from '../../assets/carrinho.svg'

const HeaderStore = () => {
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
      <RestaurantBanner style={{ backgroundImage: `url(${tratoria}) ` }}>
        <RestaurantBannerContainer>
          <TextBanner>Italiana</TextBanner>
          <TitleBanner>La Dolce Vita Trattoria</TitleBanner>
        </RestaurantBannerContainer>
      </RestaurantBanner>
      <Overlay />
    </>
  )
}

export default HeaderStore
