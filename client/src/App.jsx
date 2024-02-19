import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Product from './components/Product'
import Update from './components/Update'
import Main from './views/Main';

function App() {
  const [products, setProducts] = useState([])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/products" element={<Main products={products} setProducts={setProducts}></Main>} />
        <Route path='/products/:id' element={<Product></Product>}/>
        <Route path='/products/edit/:id' element={<Update></Update>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
