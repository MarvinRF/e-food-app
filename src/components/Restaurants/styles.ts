import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;

  > img {
    width: 100%;
    max-height: 217px;
    object-fit: cover;
  }
`

export const CardContainer = styled.div`
  background-color: ${colors.white};
  padding: 8px;
  margin-bottom: 45px;
  border-left: 1px solid ${colors.coral};
  border-right: 1px solid ${colors.coral};
  border-bottom: 1px solid ${colors.coral};
  margin-top: -4px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Rating = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
  min-height: 110px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const TagContainer = styled.div`
  background-color: ${colors.coral};
  color: ${colors.beige};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`

export const KnowMore = styled.button`
  background-color: ${colors.coral};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-right: 8px;
  border: none;
  cursor: pointer;
`
