FROM node:20

# Instala as dependências de produção
RUN npm install --only=production

# Instala as definições de tipo para express
RUN npm install @types/express --save-dev

# Copia o restante do código para o diretório de trabalho
COPY . .

# Executa a compilação do TypeScript
RUN npm run build

# Exponha a porta 3000
EXPOSE 3000

# Inicia o servidor Node.js
CMD ["node", "dist/index.js"]
