import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.darkPink};
  color: ${colors.lightPink};
  padding: 8px;
  border: 1px solid ${colors.darkPink};
  margin-bottom: 32px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
  margin-right: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 22px;
`
export const Button = styled.button`
  background-color: ${colors.lightPink};
  color: ${colors.darkPink};
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  border: none;
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
`
