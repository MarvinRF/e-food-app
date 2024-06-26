/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useParams } from 'react-router-dom'
import HeaderRestaurant from '../../components/HeaderRestaurant'
import Banner from '../../components/RestaurantBanner'
import DishesList from '../../components/DishesList'

import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

export type Prato = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurants {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

type PratoParams = {
  id: string
}

const Categories = () => {
  const { id } = useParams() as PratoParams

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (restaurant) {
    return (
      <>
        <HeaderRestaurant />
        <Banner />
        <DishesList pratos={restaurant.cardapio} />
      </>
    )
  }

  return <Loader />
}

export default Categories
