import React from 'react'
import { Card, Descricao, Infos, Titulo } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
}

const Restaurants = ({ description, image, infos, title }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
    </Card>
  )
}

export default Restaurants
