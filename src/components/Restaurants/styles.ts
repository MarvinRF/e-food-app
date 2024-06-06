import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 8px;
  position: relative;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  font-weight: 400;
  line-height: 22px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  margin-left: 8px;
  padding: 6px 4px;
`
