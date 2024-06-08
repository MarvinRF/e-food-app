import { Card, Descricao, Titulo, Button, TitleContainer } from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  button: string
  portion: string
  price: number
}

const Products = ({ description, image, title, button }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <TitleContainer>
        <Titulo>{title}</Titulo>
      </TitleContainer>
      <Descricao>{description}</Descricao>
      <Button>{button}</Button>
    </Card>
  )
}

export default Products
