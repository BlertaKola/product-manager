import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {setProduct(res.data); setLoaded(true);})
           .catch((err)=>console.log(err))
    }, [])
    const updateProduct = productObject => {
        axios.patch('http://localhost:8000/api/products/' + id, productObject)
            .then(res => {console.log(res); navigate('/products')})
            .catch((err)=>console.log(err))
    }
    return (
        <div>
            <h1>Update a product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton prodId={product._id} successCallback={() => navigate("/products")} />
                </>
            )}
        </div>
    )

}
export default Update