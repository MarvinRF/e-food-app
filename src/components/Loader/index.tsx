import React from 'react'
import { HashLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <Container>
      <HashLoader color={colors.coral} />
    </Container>
  )
}

export default Loader
