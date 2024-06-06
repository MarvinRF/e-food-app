import logo from '../../assets/logo.png'
import face from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import X from '../../assets/twitter.png'
import { Imagem, Logo, Text, SocialMediaContainer } from './styles'

const Footer = () => {
  return (
    <Imagem>
      <Logo src={logo} alt="Efood" />
      <SocialMediaContainer>
        <img src={insta} alt="" />
        <img src={face} alt="" />
        <img src={X} alt="" />
      </SocialMediaContainer>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </Imagem>
  )
}

export default Footer
