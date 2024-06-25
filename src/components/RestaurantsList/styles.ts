import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;

  @media (max-width: 768px) {
    max-width: 85%;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0 5px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
