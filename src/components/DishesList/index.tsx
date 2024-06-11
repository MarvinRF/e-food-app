import { Prato } from '../../pages/Categories/index'
import RestaurantDishes from '../RestaurantDishes'

import { Container, List } from './styles'

export type Props = {
  pratos: Prato[]
}

const DishesList = ({ pratos }: Props) => (
  <Container className="container">
    <div>
      <List>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <RestaurantDishes
              id={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default DishesList
