import { GlobalCss } from './styles'

import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
