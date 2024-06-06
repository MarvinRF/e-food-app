import React from 'react'
import {
  Card,
  Descricao,
  Infos,
  Titulo,
  RestContainer,
  Button,
  TitleContainer,
  RatingContainer
} from './styles'
import Tag from '../Tag'
import star from '../../assets/estrela.svg'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  rating: string
}

const Restaurants = ({ description, image, infos, title, rating }: Props) => {
  return (
    <RestContainer>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Card>
        <TitleContainer>
          <Titulo>{title}</Titulo>
          <RatingContainer>
            <Titulo>{rating}</Titulo>
            <span>
              <img src={star} alt="star" />
            </span>
          </RatingContainer>
        </TitleContainer>
        <Descricao>{description}</Descricao>
        <Button>Saiba mais</Button>
      </Card>
    </RestContainer>
  )
}

export default Restaurants
