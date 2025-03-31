## Project setup
1) Cambiar la variable de entorno que se encuentra en el archivo .env llamada PRECIO_USD para actualizar el valor de la misma
2) Hacer npm i
3) El proyecto ya cuenta con un seed para dejar 10 registros base cuando se monta el contenedor o se levanta la app
4) Correr docker-compose up para levantar el proyecto y la BBDD Mysql
5) Probar el proyecto en el puerto levantado (por default es el 5000)
6) Los EP son los especificados en el requerimiento
## Rutas del EP
1) Lista los productos GET: localhost:5000/productos
2) Lista un producto: GET localhost:5000/productos/{id}
3) Crear un nuevo producto: POST localhost:5000/productos 
    Ejemplo de Payload: {
        "precio": 950000,
        "descripcion": "mi descripcion del producto",
        "nombre": "producto"
    }
4) Actulizar un producto: PUT localhost:5000/productos/{id}
    Ejemplo de Payload: {
        "precio": 950000,
    }
5) Eliminar un producto DELETE localhost:5000/productos/{id}
