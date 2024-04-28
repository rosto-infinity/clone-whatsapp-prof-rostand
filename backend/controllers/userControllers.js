import User from '../models/userModels.js'
import { hashPassword } from '../utilities/hashPassword.js';

const auth = async (req, res) => {
  //Les information venant du frontend
  const { username, phone, password, image } = req.body;
  try {
    const userExist = await User.findOne({phone});
    if (userExist) {
      res.status(400);
      throw new Error('Numéro déjà utilisé');
    }

    const passwordHased = await hashPassword(password); 
    const user = await User.create({
      username,
      phone,
      password: passwordHased,
      image,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        phone: user.phone,
        image: user.image,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
export {auth};