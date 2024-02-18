import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Product = (props) => {
    const {id} =useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    return(
        <>
            <p>hello</p>
            <h1>{product.title}</h1>
            <h5>Price: {product.price}</h5>
            <h6>Description: {product.description}</h6>
        </>
    )
}
export default Product