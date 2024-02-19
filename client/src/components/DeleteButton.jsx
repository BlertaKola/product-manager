import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { prodId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + prodId)
            .then(res=>{
                successCallback();
            })
            .catch((err)=>console.log(err))
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;

