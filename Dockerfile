# Usa una imagen oficial de Node.js
FROM node:20-alpine as base

# Crea el directorio de la aplicación en el contenedor
WORKDIR /src

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Genera las migraciones antes de levantar la aplicación
RUN npm run migrations:generate

# Ejecuta las migraciones antes de levantar la aplicación
RUN npm run migration:run

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:dev"]
