#Utiliser une image de base officielle de Node.js version 20 
FROM node:20-alpine
#Définir le répertoire de travail dans le conteneur 
WORKDIR /app
#Copier le fichier package.json et package-lock.json 
COPY package*.json ./
#Installer les dépendances
RUN npm install
#Copier tout le code source dans le conteneur 
COPY ..
#Exposer le port sur lequel l'application va écouter 
EXPOSER 3000
#Lancer l'application en mode développement 
CMD ["npm","start"]
