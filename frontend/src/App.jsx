import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Print from './pages/Print'
import Product from './pages/Product'
import Products from './pages/Products'
import Sale from './pages/Sale'
import Stats from './pages/Stats'
import Transactions from './pages/Transactions'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}  />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/transactions/:id' element={<Transactions />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/print' element={<Print />} />
      </Routes>
    </Router>
  )
}

export default App
