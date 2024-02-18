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
import Update from './components/Update'

function App() {
  const [products, setProducts] = useState([])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductList products={products} setProducts={setProducts}></ProductList>} />
        <Route exact path="/" element={<ProductForm products={products} setProducts={setProducts}></ProductForm>} />
        <Route path='/products/:id' element={<Product></Product>}/>
        <Route path='/products/edit/:id' element={<Update></Update>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
