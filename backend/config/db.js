import mongoose from 'mongoose';

const connectDB =  () => { 
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MongoDB_URL)
  .then(() =>{
      console.log("MongoDB connecté avec success")
   } ).catch( (err) =>{
    console.log(err);
  })
};

export default connectDB;