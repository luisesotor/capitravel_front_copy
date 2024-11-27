# Usa una imagen base de Node.js
FROM node:18-alpine AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen ligera para servir los archivos estáticos
FROM nginx:stable-alpine

# Copia los archivos construidos al directorio de NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia NGINX
CMD ["nginx", "-g", "daemon off;"]
