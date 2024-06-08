import { useEffect, useState } from 'react'
import HeaderStore from '../../HeaderStore'
import ProductList from '../../ProductList'
import { useParams } from 'react-router-dom'
import Products from '../../Products'

export type Products = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantPage = () => {
  const { id } = useParams()

  const [food, setFood] = useState<Products[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res.cardapio))
  }, [id])

  return (
    <div>
      <HeaderStore />
      <ProductList restaurant={food} />
    </div>
  )
}

export default RestaurantPage
