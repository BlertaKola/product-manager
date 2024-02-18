import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Update = (props) => {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault()
        console.log("HERE")
        axios.patch(`http://localhost:8000/api/products/${id}`, {title, price, description})
            .then(()=>{
                console.log("help")
                navigate(`/products`)
            })
            .catch(err => console.log(err))
    }
    return (
        <>

            <p>hello</p>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Description: {description}</p>

            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />

                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" />
            </form>

        </>
    )
}
export default Update