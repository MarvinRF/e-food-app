import React from 'react'
import Header from '../../Header'
import Restaurants from '../../Restaurants'

import japan from '../../../assets/sushi.png'

const Home = () => {
  return (
    <div>
      <Restaurants
        title={'gohan'}
        description={'padaria'}
        image={japan}
        infos={['NOVIDADE']}
      />
    </div>
  )
}

export default Home
