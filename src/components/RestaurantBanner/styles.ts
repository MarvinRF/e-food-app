import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Text = styled.p`
  color: ${colors.white};
  font-weight: 100;
  font-size: 32px;
  margin-top: 24px;
`

export const Title = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  margin-bottom: 32px;
`

export const Container = styled.div`
  width: 1024px;
  margin: auto;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
