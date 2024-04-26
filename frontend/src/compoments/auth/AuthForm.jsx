import { useState } from "react";

function AuthForm() {
  const [islogin, setIslogin] = useState(false);
  return (
    <div> 
      <form className="w-full  py-20 px-10 flex flex-col">
        <input type="text" placeholder={" Numero de téléphone"} className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"/>

       
        
        {!islogin && <input type="text" placeholder={" Nom d'utilisateur"} className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"/>}

        <input type="text" placeholder={" Mot de passe"} className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"/>

        {!islogin &&  <input type="text" placeholder={" Confirmer votre mot de passe"} className="w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]"/>}
       
         
         { islogin ?(
          <p className="mt-4">
         Vous n.avez pas un compte ? &nbsp;
           <span  className= "text-[#00a884] cursor-pointer"
           onClick={()=> setIslogin(false)}
           > Créer un compte </span> 
        </p>
         ):(
          <p className="mt-4">
          Avez-vous déjà un compte ? &nbsp; 
           <span  className= "text-[#00a884] cursor-pointer"
           onClick={()=>setIslogin (true)}
           > Connexion </span>
        </p>
         )

         }
        
          <button className=' text-[1.2rem] mt-5 py-2 px-3 bg-[#00a884] text-white'>
            {islogin ? 'Connexion' : 'Inscription'}
          </button>
      </form>
    </div>
  )
}

export default AuthForm