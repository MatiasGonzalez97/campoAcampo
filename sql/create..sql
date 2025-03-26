CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

-- Crear la tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO productos (nombre, descripcion, precio)
VALUES 
('Alimento balanceado para bovinos', 'Bolsa de 40kg con nutrientes esenciales para el engorde de ganado.', 28500),
('Suplemento mineral', 'Mezcla mineral para mejorar la salud y productividad del ganado.', 15750),
('Vacuna contra fiebre aftosa', 'Dosis individual para bovinos, con certificado SENASA.', 3900),
('Bebedero automático', 'Bebedero de acero galvanizado para ganado.', 12000),
('Comedero plástico reforzado', 'Comedero resistente de 80 litros, ideal para pasturas.', 65000),
('Antibiótico de amplio espectro', 'Frasco de 100ml para tratamiento de infecciones comunes.', 42000.30),
('Soga para manejo de animales', 'Soga de nylon trenzado de 10 metros.', 9500),
('Guantes', 'Caja de 100 guantes desechables de uso veterinario.', 18999),
('Identificadores auriculares', 'Pack de 50 aretes numerados para identificación bovina.', 25699),
('Pala', 'Pala metálica reforzada con mango de madera.', 22755);