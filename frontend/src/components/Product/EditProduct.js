import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./Product.css";
const EditProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getProductApi = "http://localhost:5000/productos";

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(getProductApi.concat("/") + id)
      .then((item) => {
        setProduct(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setProduct({ ...product, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    fetch(getProductApi.concat("/") + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(true);
        navigate("/show-product");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      })
  };

  return (
    <div className="product-form">
      <div className="heading">
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
        <p>Edit Form</p>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label for="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={product.nombre}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="descripcion" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={product.descripcion}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="precio" className="form-label">
            Precio
          </label>
          <input
            type="precio"
            className="form-control"
            id="precio"
            name="precio"
            value={product.precio}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Precio Dolar (solo lectura)
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={product.precio_dolar}
            readonly
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          EDIT
        </button>
      </form>
    </div>
  );
};
export default EditProduct;
