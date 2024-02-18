import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Product from './components/Product'

function App() {
  const [products, setProducts] = useState([])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductList products={products} setProducts={setProducts}></ProductList>} />
        <Route exact path="/" element={<ProductForm products={products} setProducts={setProducts}></ProductForm>} />
        <Route path='/products/:id' element={<Product></Product>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
