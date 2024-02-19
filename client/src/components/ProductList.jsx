import { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import DeleteButton from "./DeleteButton"

const ProductList = (props) => {
    const { products, removeFromDom } = props;
    return (
        <div>
            {products.map((prod, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/products/" + prod._id}>
                            {prod.title}, {prod.price}, {prod.description}
                        </Link>
                        |
                        <Link to={"/products/edit/" + prod._id}>
                            Edit
                        </Link> 
                        |
                       <DeleteButton prodId={prod._id} successCallback={()=>removeFromDom(prod._id)}/>
                    </p>
                )
            })}
        </div>
    )
}
export default ProductList;