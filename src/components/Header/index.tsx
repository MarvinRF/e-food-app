import React from 'react'
import logo from '../../assets/logo.png'
import { Imagem, Logo, Title } from './styles'
import background from '../../assets/background-header.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${background}) ` }}>
      <Link to="/">
        <Logo src={logo} alt="Efood" />
      </Link>

      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Imagem>
  )
}

export default Header
