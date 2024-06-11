import { Restaurant } from '../../pages/Home'
import Restaurants from '../Restaurants'
import { Container, List } from './styles'

export type Props = {
  stores: Restaurant[]
}

const ListaRestaurantes = ({ stores }: Props) => (
  <Container className="container">
    <div>
      <List>
        {stores.map((store) => (
          <li key={store.id}>
            <Restaurants
              id={store.id}
              tipo={store.tipo}
              image={store.capa}
              title={store.titulo}
              number={store.avaliacao}
              destacado={store.destacado}
              description={store.descricao}
              button={store.button}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
