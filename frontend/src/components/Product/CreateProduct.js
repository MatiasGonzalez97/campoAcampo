import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './Product.css';
const CreateProduct = () => {
    const navigate = useNavigate();
    const createProductApi = "http://localhost:5000/productos"
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        nombre: "",
        descripcion: "",
        precio: ""
    })

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: name === "precio" ? parseFloat(value) : value
        });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        const productToSend = {
            ...product,
            precio: parseFloat(product.precio)
        };
        try {
            setIsLoading(true);
            const response = await fetch(createProductApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productToSend),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setProduct({nombre: "",descripcion: "",precio: ""})
                navigate('/show-product');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error) {
            setError(error.message);
        } finally{
            setIsLoading(false);
        }
    }

    return (
        <div className='product-form'>
            <div className='heading'>
            {isLoading && <Loader />}
            {error && <p>Error: {error}</p>}
                <p>Formulario de creación de producto</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={product.nombre} onChange={handelInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="descripcion" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={product.descripcion} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="precio" name="precio" value={product.precio} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct