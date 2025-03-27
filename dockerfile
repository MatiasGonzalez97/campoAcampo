# Dockerfile
FROM node:21

# Crear carpeta de la app
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código de la app
COPY . .

# Exponer el puerto en el que corre Nest (por defecto 5000)
EXPOSE 5000

# Ejecutar la app NestJS
CMD ["npm", "run", "start:prod"]