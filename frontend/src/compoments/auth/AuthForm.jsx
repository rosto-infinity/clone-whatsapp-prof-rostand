import { useState } from "react";
import axios  from 'axios';



function AuthForm() {
  const [islogin, setIslogin] = useState(false);

  //username, phone, password, image  ces variable vienent au niveau de userControllers
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(username);
    try {
      const {data} = await axios.post('/api/users', {
        username,
        phone,
        password,
      });
     
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-full  py-20 px-10 flex flex-col"
      >
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder={" Numero de téléphone"}
          className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"
        />

        {!islogin && (
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder={" Nom d'utilisateur"}
            className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"
          />
        )}

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={" Mot de passe"}
          className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"
        />

        {!islogin && (
          <input
            type="password"
            value={confirmpassword}
            onChange={(event) => setConfirmpassword(event.target.value)}
            placeholder={" Confirmer votre mot de passe"}
            className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"
          />
        )}

        {islogin ? (
          <p className="mt-4">
            Vous n.avez pas un compte ? &nbsp;
            <span
              className="text-[#00a884] cursor-pointer"
              onClick={() => setIslogin(false)}
            >
              {" "}
              Créer un compte{" "}
            </span>
          </p>
        ) : (
          <p className="mt-4">
            Avez-vous déjà un compte ? &nbsp;
            <span
              className="text-[#00a884] cursor-pointer"
              onClick={() => setIslogin(true)}
            >
              {" "}
              Connexion{" "}
            </span>
          </p>
        )}

        <button
          type="submit"
          className=" text-[1.2rem] mt-5 py-2 px-3 bg-[#00a884] text-white"
        >
          {islogin ? "Connexion" : "Inscription"}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
