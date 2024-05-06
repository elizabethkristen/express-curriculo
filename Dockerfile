# Use a imagem oficial do Node.js 20
FROM node:20

# Define o diretório de trabalho como /app
WORKDIR /app

# Copia apenas os arquivos package.json e package-lock.json para aproveitar o cache
COPY package*.json ./

# Instala apenas as dependências de produção com um cache limpo
RUN npm ci --omit=dev

# Copia o restante do projeto para o diretório de trabalho
COPY . .

# Configura a porta da aplicação
ENV PORT=8080

# Expõe a porta 8080 para permitir o acesso externo
EXPOSE 8080

# Define o comando padrão para iniciar a aplicação
CMD ["npm", "start"]
