import { HeaderContainer, Container } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/index'
import carrinho from '../../assets/carrinho.svg'

import { open } from '../../store/reducers/cart'

const HeaderRestaurant = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <Container className="container">
        <div>
          <Link to="/">
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Restaurantes</p>
          </Link>
        </div>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <div>
          <button
            onClick={openCart}
            style={{ fontSize: '18px', fontWeight: 'bold' }}
          >
            {items.length} produto(s) no carrinho{' '}
            <span>
              <img src={carrinho} alt="carrinho" />
            </span>
          </button>
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default HeaderRestaurant
