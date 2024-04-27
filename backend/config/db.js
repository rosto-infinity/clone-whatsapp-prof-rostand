import mongoose from 'mongoose';

// const connectDB = async () =>{
//   try{
//     const connexion = await mongoose.connect(process.env.MongoDB_URL, {
//       userUnifiedTopology: true,
//       useNewUrlParser:true,
//     });
//     console.log(`mongodb connecté avec success : ${connexion.connection.host}` );
//   }catch (error){
//     console.log(`Erreur de connexion de mongodb : ${error.message}
//     `);
//     process.exit(1);
//   }
// };
const connectDB =  () => { 
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MongoDB_URL)
  .then(() =>{
      console.log("MongoDB connecté avec success")
   } ).catch( (err) =>{
    console.log(err);
  //   process.exit();
  })
};

export default connectDB;