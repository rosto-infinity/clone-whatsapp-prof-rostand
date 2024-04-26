import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

 let port = 3000;

// ce qui signifie qu'il écoutera sur le port spécifié dans la variable d'environnement process.env.PORT s'il est défini, sinon il écoutera sur le port 3000 par défaut.
// const port = process.env.port || 5002;
const app =express();


app.get('/', (req, res)=>{
  res.send('API envoyée');
});

app.get("/post", (req, res) => {
  res.json({message : "voici les données okok !"})
}) ;

app.listen(port, () => {
  console.log(`Le serveur a démarré au port ${port} avec success`);
 });

 connectDB();
