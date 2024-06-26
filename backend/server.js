import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

 const app =express();

 dotenv.config();
 
 // ce qui signifie qu'il écoutera sur le port spécifié dans la variable d'environnement process.env.PORT s'il est défini, sinon il écoutera sur le port 3000 par défaut.
 // const port = process.env.port || 5002;
 
 app.use(express.json());

let port = 3000;
app.listen(port, () => {
  console.log(`Le serveur a démarré au port ${port} avec success`);
});

app.use('/api/users', userRoutes);
app.get('/', (req, res)=>{
  res.send('API users envoyée');
});
connectDB();

