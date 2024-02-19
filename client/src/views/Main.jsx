
import { useState, useEffect } from 'react';
import ProductList from "../components/ProductList";

import ProductForm from "../components/ProductForm"
import axios from "axios";



const Main = () => {
    const [updated,setupdated]= useState(false)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch((err)=>console.log(err))
    }, [updated])
    const removeFromDom = prodId => {
        axios.delete("http://localhost:8000/api/products/" + prodId)
        .then((res)=>{
            console.log(res);
            setProducts(products.filter(prod=> prod._id !== prodId));
        })
        .catch((err)=>console.log(err))
        
    }
   const createProduct = prodObject => {
        axios.post('http://localhost:8000/api/products', prodObject)
            .then(res => {
                console.log(res);
                setupdated(!updated)
            })
            .catch((err)=>console.log(err))
    }
    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main