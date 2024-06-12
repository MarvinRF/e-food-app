import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../RestaurantDishes'
import trash from '../../assets/trash.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  TotalValue,
  ButtonContinue
} from './style'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{priceFormat(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button">
                <img src={trash} alt="lixeira" />
              </button>
            </CartItem>
          ))}
        </ul>
        <TotalValue>
          <p>Valor total</p>
          <p>
            {priceFormat(getTotalPrice())}
            {''}
          </p>
        </TotalValue>
        <ButtonContinue
          title="Clique aqui para continuar com a entrega"
          type="button"
        >
          Continuar com a entrega
        </ButtonContinue>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
