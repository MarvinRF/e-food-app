import { useEffect, useState } from 'react'
import RestaurantsList from '../../RestaurantsList'
import Header from '../../Header'

export type Restaurant = {
  image: string
  id: number
  infos: string
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  button: string
  destacado: boolean
  tipo: string
  cardapio?: string
  preco?: number
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((resposta) => setRestaurantes(resposta))
  }, [])

  return (
    <div>
      <Header />
      <RestaurantsList restaurant={restaurantes} />
    </div>
  )
}

export default Home
