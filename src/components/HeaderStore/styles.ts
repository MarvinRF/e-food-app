import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 186px;
  width: 100%;
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
`
export const Logo = styled.img`
  width: 125px;
  height: 58px;
`
export const Title = styled.h1`
  color: ${colors.darkPink};
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 900;
  max-width: 539px;
`

export const RestaurantBanner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 280px;
  width: 100%;
`
export const Overlay = styled.div`
  position: absolute;
  top: 186px;
  left: 0;
  width: 100%;
  height: 280px;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
`
export const TitleBanner = styled.h1`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  z-index: 1;
`
export const TextBanner = styled.p`
  color: ${colors.white};
  font-size: 30px;
  margin-bottom: 156px;
  margin-top: 25px;
  font-weight: 100;
  z-index: 1;
`

export const RestaurantBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 1024px;
`
export const LinkCart = styled.a`
  display: flex;
  img {
    margin-left: 5px;
    max-height: 20px;
  }
`
