import { Container, Fechar, List, Modal, ModalContent } from './styles'
import Products from '../Products'
import close from '../../assets/close.png'
import { useState } from 'react'
import { Button } from '../Products/styles'

export type ProductProps = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

export type Props = {
  restaurant: ProductProps[]
}

const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const getDescription = (description: string) => {
  if (description.length > 120) {
    return description.slice(0, 117) + '...'
  }
  return description
}

const ProductList = ({ restaurant }: Props) => {
  const [modal, setModal] = useState<{
    isVisible: boolean
    product?: ProductProps
  }>({
    isVisible: false
  })

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurant.map((product) => (
              <li
                key={product.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    product: product
                  })
                }}
              >
                <Products
                  key={product.id}
                  title={product.nome}
                  description={getDescription(product.descricao)}
                  image={product.foto}
                  button="Adicionar ao carrinho"
                  id={product.id}
                  portion={product.porcao}
                  price={product.preco}
                />
              </li>
            ))}
          </List>
        </div>
      </Container>
      {modal.product && (
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            <li key={modal.product.id}>
              <img src={modal.product.foto} alt="prato" />
              <div className="side">
                <h2>{modal.product.nome}</h2>
                <p>{modal.product.descricao}</p>
                <p> Servem de {modal.product.porcao}</p>
                <Button>
                  Adicionar ao carrinho - {formatPrice(modal.product.preco)}
                </Button>
              </div>
            </li>
            <Fechar
              src={close}
              alt="fechar"
              onClick={() => {
                setModal({
                  isVisible: false
                })
              }}
            />
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              setModal({
                isVisible: false
              })
            }}
          ></div>
        </Modal>
      )}
    </>
  )
}

export default ProductList
