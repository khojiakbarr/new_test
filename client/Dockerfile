FROM node:18

# Ishchi katalog
WORKDIR /app

# package.json va lock faylni nusxalash
COPY package*.json ./

# Vite va boshqa deps'larni o‘rnatish
RUN npm install

# Barcha frontend fayllarni nusxalash
COPY . .

# Vite default port (agar o‘zgartirmagan bo‘lsangiz)
EXPOSE 5173

# Dev serverni ishga tushirish
CMD ["npm", "run", "dev"]