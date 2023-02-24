import "./Login.css"
import {useState} from "react"
// import { Redirect } from "react-router-dom";
// import Home from "./Home";
import { Link} from "react-router-dom"
// import SignUp from "./SignUp"

 const Login =   () =>{
    const [login,setLogin]=useState({Uname:"",password:""})
    const [UN,setUN]=useState(false);
    const [PS,setPS]=useState(false);
    const handleSubmit=(e)=>{
     e.preventDefault();
      
       if(login.Uname.length===0 ){
        setUN(!UN)
        
      }
      else if(login.password.length<=8 ){
        setPS(!PS)
       
      }
      else if(login.Uname.length>0 && login.password.length>8){
          setPS(!PS)
          setUN(!UN)
        alert("welcome to our page")
        
      }
      // let data = {login}
      // let result = await fetch("http://localhost:3000/Login",{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json",
      //     "Accept":"application/json"
      //   },
      //   body: JSON.stringify(data)
      // })
      // result = await

    }
    return(
        
        <form onSubmit={handleSubmit}>
        <div className="mainFrame">
          <h1>Login Form</h1>
          <div className="Username ">
            <label>Username:</label>
            <input type="text" value={login.Uname} onChange={(e)=>setLogin({...login,Uname:e.target.value})}/>
            {UN?<lable>empty field not allowed</lable>:null}
          </div>
          <div className="Password">
            <label>Password:</label>
            <input type="password" value={login.password} onChange={(e)=>{setLogin({...login,password:e.target.value})}}/>
            {PS?<lable>min 8 character</lable>:null}
          </div>
         
          <div className="LoginButton">
            <button type="submit">Login</button>
            
          </div>
          <div className="Signup-link"><h3><Link to="/SignUp">Click </Link> to create new account</h3></div>

         
        </div>
        </form>
        
        
    )
}
export default Login