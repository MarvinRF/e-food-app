import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../RestaurantDishes'
import { getTotalPrice } from '../../utils'
import trash from '../../assets/trash.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  TotalValue,
  ButtonContinue
} from './style'
import { useState } from 'react'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {!payment && items.length > 0 ? (
          <>
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
                {priceFormat(getTotalPrice(items))}
                {''}
              </p>
            </TotalValue>
            <ButtonContinue
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => setPayment(true)}
            >
              Continuar com a entrega
            </ButtonContinue>
          </>
        ) : (
          items.length === 0 && (
            <>
              <p className="empty-text">
                😥 😥 😥 <br />
                Que pena, parece que o seu carrinho está vazio, adicione pelo
                menos um produto para continuar com a compra.
              </p>
              <ButtonContinue
                title="Clique aqui para continuar com a entrega"
                type="button"
                onClick={closeCart}
              >
                Ir as compras
              </ButtonContinue>
            </>
          )
        )}
        {payment && <Checkout setPayment={setPayment} />}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
