import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/components/LoginForm';
import MainPage from './pages/mainPage';

function App() {

  const adminUser = {
    email:"haitboevkaromatillo@gmail.com",
    password:"karomatillo_offical",
  }
  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({name:"",email:""});
  }

  return (
    <>
   <BrowserRouter>
    {(user.email != "") ? (
    <>
    <MainPage/>
    <button onClick={Logout} >Logout</button>
    </> 
      ) : (
      <LoginForm Login={Login} error={error} />
    )}
    </BrowserRouter>
    </>
  );
}

export default App;