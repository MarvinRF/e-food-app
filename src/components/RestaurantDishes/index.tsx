import { useState } from 'react'
import { useDispatch } from 'react-redux'

import fechar from '../../assets/close.png'
import { Prato } from '../../pages/Categories'
import { add, open } from '../../store/reducers/cart'

import {
  Image,
  Card,
  CardContainer,
  TitleContainer,
  Title,
  Description,
  ButtonAdd,
  Modal,
  ModalContent,
  InfosContainer
} from './styles'

type ModalState = {
  isVisible: boolean
}

type PratoProps = {
  prato: Prato
}

export const priceFormat = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const RestaurantDishes = ({
  foto,
  nome,
  descricao,
  porcao,
  preco,
  id
}: Prato) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
    return descricao
  }

  const prato = {
    foto,
    nome,
    descricao,
    porcao,
    preco,
    id
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <Card>
      <Image src={foto} alt={nome} />
      <CardContainer>
        <TitleContainer>
          <Title>{nome}</Title>
        </TitleContainer>
        <Description>{getDescricao(descricao)}</Description>
        <ButtonAdd
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          <a>Adicionar ao carrinho</a>
        </ButtonAdd>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            <img
              src={fechar}
              alt="Botão de fechar"
              onClick={() => {
                closeModal()
              }}
            />
            <div>
              <img
                src={foto}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </div>
            <InfosContainer>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>{porcao}</p>
              <ButtonAdd onClick={addToCart}>
                Adicionar ao carrinho - {priceFormat(preco)}
              </ButtonAdd>
            </InfosContainer>
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </Modal>
      </CardContainer>
    </Card>
  )
}

export default RestaurantDishes
