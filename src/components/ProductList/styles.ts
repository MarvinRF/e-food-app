import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${colors.white};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
