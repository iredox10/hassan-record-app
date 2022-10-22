import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Sale from './pages/Sale'
import Transactions from './pages/Transactions'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />}  />
        <Route path='/products' element={<Products />} />
        <Route path='/transactions/:id' element={<Transactions />} />
        <Route path='/sale' element={<Sale />} />

      </Routes>
    </Router>
  )
}

export default App