import React from 'react'
import logo from '../../assets/logo.png'
import { Imagem, Logo, Title } from './styles'
import background from '../../assets/background-header.png'
const Header = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${background}) ` }}>
      <Logo src={logo} alt="Efood" />

      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Imagem>
  )
}

export default Header
