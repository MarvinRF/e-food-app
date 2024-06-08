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
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

type Props = {
  infos: string
  image: string
  title: string
  rating: number
  description: string
  button: string
  tipo: string
  destacado: boolean
  id: number
}

const Restaurants = ({
  description,
  image,
  infos,
  title,
  rating,
  destacado,
  id
}: Props) => {
  return (
    <RestContainer>
      <img src={image} alt={title} />
      <Infos>
        {destacado === true ? (
          <TagContainer>Destaque da semana</TagContainer>
        ) : null}
        <TagContainer>{infos}</TagContainer>
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
        <Button>
          <Link to={`restaurant/${id}`}>Saiba mais</Link>
        </Button>
      </Card>
    </RestContainer>
  )
}

export default Restaurants
