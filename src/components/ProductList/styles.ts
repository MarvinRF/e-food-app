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
export const Modal = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  color: ${colors.lightPink};

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 344px;
  background-color: ${colors.darkPink};
  position: relative;
  padding: 32px;
  z-index: 1;

  li {
    display: flex;
    flex-direction: row;

    > img {
      margin-right: 24px;
      max-width: 290px;
      max-height: 290px;
      object-fit: cover;
    }
  }

  .side {
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 16px;
    }
    button {
      max-width: 218px;
      color: ${colors.darkPink};
    }
  }
`
export const Fechar = styled.img`
  position: absolute;
  top: 3%;
  right: 1%;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
