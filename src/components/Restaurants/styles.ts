import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const RestContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 472px;
  margin-bottom: 48px;

  ${TagContainer} {
    margin-right: 8px;
  }
  img {
    width: 100%;
    max-width: 472px;
    height: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Card = styled.div`
  background-color: ${colors.white};
  padding: 8px;
  border: 1px solid ${colors.darkPink};
  margin-top: -5px;
  max-width: 472px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 16px;
  margin-right: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
  font-weight: 400;
  line-height: 22px;
`
export const Button = styled.button`
  background-color: ${colors.darkPink};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  border: none;
  a {
    color: ${colors.lightPink};
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 20px;
    height: 20px;
  }
`
