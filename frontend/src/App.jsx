import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query';
import Home from './pages/Home'
import Admin from './pages/Admin'
import Print from './pages/Print'
import Product from './pages/Product'
import Products from './pages/Products'
import Sale from './pages/Sale'
import Stats from './pages/Stats'
import Transactions from './pages/Transactions'
import ManageEmployers from './pages/ManageEmployers'
import PaymentStats from './pages/PaymentStats'

// Initialze the client
const queryClient = new QueryClient();

function App() {
  return (
		<QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />}  />
        <Route path='/Admin' exact element={<Admin />}  />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/transactions/:id' element={<Transactions />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/print' element={<Print />} />
        <Route path='/manage-employers' element={<ManageEmployers />} />
        <Route path='/payment-stats' element={<PaymentStats />} />
      </Routes>
    </Router>
		</QueryClientProvider>

  )
}

export default App
