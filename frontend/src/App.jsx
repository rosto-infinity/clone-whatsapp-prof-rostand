
import { useEffect, useState } from 'react';
import './App.css';
import ChatContainer from './compoments/ChatContainer';
import Header from './compoments/Header';
import Auth from './compoments/auth/Auth';
import AuthHeader from './compoments/auth/AuthHeader';
function App() {

  const [user, setUser] = useState({});
  console.log(user);
  
  useEffect(() => {
     //****code a executer lors du lancement de notre app.jsx ***\\
     //recuperer les infos de l'user dans le localstory
    const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userInfo);
    return () => {};
  }, []);

  if(user.token){
    // <div> 
    // <Header />
    // <ChatContainer />  
    // </div>
     <div> 
     <AuthHeader />
     <Auth />
   </div>
    
  }

  return (
  <div> 
    <AuthHeader />
    <Auth />
  </div>
  // <div> 
  // <Header />
  // <ChatContainer />  
  // </div>
  );
}

export default App

