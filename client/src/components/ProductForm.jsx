import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const ProductForm = (props) => {
    const {products, setProducts} = props
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const newProduct = {title, price, description}
        // console.log(newProduct)
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description   
        })
            .then(res=>{
                setProducts([...products, res])
                console.log(res.data);
            })
            
            .catch(err=>console.log(err))
        
        // console.log(products)
        setTitle("")
        setPrice("")
        setDescription("")
        navigate('/products')
    }

    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>

                <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;

