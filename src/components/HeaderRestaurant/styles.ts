import styled from 'styled-components'

import bannerImg from '../../assets/background-header.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  background-image: url(${bannerImg});
  background-size: cotain;

  .container {
    height: 186px;
    display: flex;
    text-align: center;
    padding: 40px 0;

    p {
      color: ${colors.coral};
    }
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;

  button {
    border: none;
    background: transparent;
    color: ${colors.coral};
    cursor: pointer;

    img {
      margin-left: 5px;
      height: 23px;
      width: 23px;
    }
  }
`
