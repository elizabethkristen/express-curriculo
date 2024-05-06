# Use a imagem oficial do Node.js 20
FROM node:20

# Define o diretório de trabalho como /app
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para aproveitar o cache
COPY package*.json ./

# Instala as dependências de produção com um cache limpo
RUN npm ci --omit=dev

# Instala as definições de tipo para express
RUN npm install @types/express --save-dev

# Copia o restante do projeto para o diretório de trabalho
COPY . .

# Compila o código TypeScript para JavaScript
RUN npm run build

# Configura a porta da aplicação
ENV PORT=8080

# Expõe a porta 8080 para permitir o acesso externo
EXPOSE 8080

# Define o comando padrão para iniciar a aplicação
CMD ["npm", "start"]
