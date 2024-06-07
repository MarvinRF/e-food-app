import React from 'react'
import { Card, Descricao, Titulo, Button, TitleContainer } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Products = ({ description, image, title }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <TitleContainer>
        <Titulo>{title}</Titulo>
      </TitleContainer>
      <Descricao>{description}</Descricao>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default Products
