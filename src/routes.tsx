import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import RestaurantPage from './components/pages/RestaurantPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPage />} />
  </Routes>
)

export default Rotas
