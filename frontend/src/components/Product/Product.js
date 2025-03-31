import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
const EditProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
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

  return (
    <div className="product mt-5">
      <table className="table table-bordered">
    <thead>
      <tr>
        <th>Columnas</th>
        <th>Datos</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>{product.nombre}</td>
      </tr>
      <tr>
        <td>Descripcion</td>
        <td>{product.descripcion}</td>
      </tr>
      <tr>
        <td>Precio</td>
        <td>${product.precio}</td>
      </tr>
      <tr>
        <td>Precio Dolar</td>
        <td>$USD {product.precio_dolar}</td>
      </tr>
    </tbody>
  </table>
    </div>
  );
};
export default EditProduct;
