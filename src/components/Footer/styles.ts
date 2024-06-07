import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  background-color: ${colors.lightPink};
  display: block;
  justify-content: center;
  text-align: center;
  height: 298px;
  width: 100%;
  margin-top: 120px;
`
export const SocialMediaContainer = styled.div`
  padding-bottom: 80px;
  img {
    margin-right: 8px;
  }
`
export const Logo = styled.img`
  margin-top: 40px;
  margin-bottom: 32px;
  width: 125px;
  height: 58px;
`
export const Text = styled.p`
  text-align: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 400;
  margin: 0 auto;
  max-width: 480px;
`
