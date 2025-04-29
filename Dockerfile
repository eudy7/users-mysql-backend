FROM debian:bullseye

RUN apt-get update && \
    apt-get install -y curl make g++ && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Crea el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia todos los archivos de tu backend
ADD . .

# Instala las dependencias
RUN npm install

# Expone el puerto que tu app utiliza
EXPOSE 8080

# Comando que ejecuta la API
CMD ["node", "index.js"]
