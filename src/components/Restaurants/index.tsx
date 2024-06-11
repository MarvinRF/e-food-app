import { Link } from 'react-router-dom'

import star from '../../assets/estrela.svg'

import {
  Card,
  CardContainer,
  TitleContainer,
  Title,
  Rating,
  Description,
  Infos,
  TagContainer,
  RatingContainer,
  KnowMore
} from './styles'

type Props = {
  id: number | undefined
  image: string
  title: string
  number: number
  description: string
  button: string
  tipo: string
  destacado: boolean
}

const Restaurants = ({
  id,
  image,
  title,
  number,
  description,
  tipo,
  destacado
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {destacado === true ? (
        <TagContainer>Destaque da semana</TagContainer>
      ) : null}
      <TagContainer>{tipo}</TagContainer>
    </Infos>
    <CardContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <RatingContainer>
          <Rating>{number}</Rating>
          <img src={star} alt="Estrelas" />
        </RatingContainer>
      </TitleContainer>
      <Description>{description}</Description>
      <KnowMore>
        <Link
          style={{ textDecoration: 'none', color: '#FFEBD9' }}
          to={`cardapio/${id}`}
        >
          Saiba mais
        </Link>
      </KnowMore>
    </CardContainer>
  </Card>
)

export default Restaurants
