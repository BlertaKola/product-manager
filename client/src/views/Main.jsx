
import { useState, useEffect } from 'react';
import ProductList from "../components/ProductList";

import ProductForm from "../components/ProductForm"
import axios from "axios";



const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])
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
                console.log(res.data)
                setProducts([...products, prodObject])
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
    // const [products, setProducts] = useState([])

    // return (
    //     <>

    //         <ProductForm products={products} setProducts={setProducts}></ProductForm>
    //         <ProductList products={products} setProducts={setProducts} style={{marginTop: "30px"}}></ProductList>


    //     </>
    // )
}
export default Main