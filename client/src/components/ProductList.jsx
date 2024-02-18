import { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const ProductList = (props) => {
    const { products, setProducts } = props
    const deleteProduct = (prodId) => {
        axios.delete(`http://localhost:8000/api/products/${prodId}`)
        .then(console.log("deleted"))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [products])

    return (
        <>

            <table style={{ border: "1px solid black" }}>
                <thead style={{ border: "1px solid black" }}>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody style={{ border: "1px solid black" }}>
                    {products.map((prod, index) => {
                        return (

                            <tr key={index}>
                                <td>{prod.title}</td>
                                <td>{prod.price}</td>
                                <td>{prod.description}</td>
                                <td><Link to={`/products/${prod._id}`}> {prod.title}'s Page! </Link></td>
                                <td><Link to={`/products/edit/${prod._id}`}> Update {prod.title}</Link></td>
                                <td><button onClick={(e) => deleteProduct(prod._id)}>Delete</button></td>
                            </tr>

                        )
                    })}
                </tbody>

            </table>
            <Link to={"/"}>Add new products</Link>
        </>
    )
}
export default ProductList;