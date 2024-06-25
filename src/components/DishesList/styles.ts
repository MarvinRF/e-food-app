import styled from 'styled-components'

export const Container = styled.section`
  padding: 56px 0 120px;
  max-width: 1024px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 85%;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 30px 10px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
