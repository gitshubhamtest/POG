import "./SignUp.css";
import { useState } from "react";
import {Link} from "react-router-dom"

const SignUp = () => {
    
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    createPass: "",
    mobNo: "",
    email: "",
  });
  const [boolean,setBoolean]=useState({
    UN:false,
    PS:false,
    CP:false,
    MN:false,
    EM:false
  })
  

  const handleSubmit=(e)=>{
     e.preventDefault();
     if(userInfo.password!==userInfo.createPass){
        setBoolean({...boolean,CP:true})
        console.log(boolean.CP)
     }
     else if(userInfo.username.length===0){
        setBoolean({...boolean,UN:true})
     }
     else if(userInfo.createPass.length===0){
        setBoolean({...boolean,CP:true})
     }
     else if(userInfo.password.length===0){
        setBoolean({...boolean,PS:true})
     }
     else if(userInfo.mobNo.length===0){
        setBoolean({...boolean,EM:true})
     }
     else if(userInfo.email.length===0){
        setBoolean({...boolean,EM:true})
     }
     else{
        alert("confirm")
        setBoolean({UN:false,
            PS:false,
            CP:false,
            MN:false,
            EM:false})
     }

  }
  return (
   
    <form onSubmit={handleSubmit}>
      <div className="Signup-Link">
        <h1>Sigh Up</h1>
        <div>
          <lable>Username :</lable>
          <input type="text" value={userInfo.username} onChange={(e)=>setUserInfo({...userInfo,username:e.target.value})}/>
          {boolean.UN ? <label style={{color:"red"}}>Empty field not allowed</label> : null}
        </div>
        <div>
          <lable>Create Password :</lable>
          <input type="text" value={userInfo.password} onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})}/>
        </div>
        <div>
          <lable>Conform Password :</lable>
          <input type="password" value={userInfo.createPass} onChange={(e)=>setUserInfo({...userInfo,createPass:e.target.value})}/>
          {boolean.CP ? <label style={{color:"red"}}>Password not matching</label> : null}
        </div>
        <div>
          <lable>Mob no :</lable>
          <input type="number" value={userInfo.mobNo} onChange={(e)=>setUserInfo({...userInfo,mobNo:e.target.value})}/>
          {boolean.MN ? <label style={{color:"red"}}>Empty field not allowed</label> : null}
        </div>
        <div>
          <lable>Email :</lable>
          <input type="text" value={userInfo.email} onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}/>
          {boolean.EM ? <label style={{color:"red"}}>Empty field not allowed</label> : null}
        </div>
        <div className="Signup-button">
          <button type="submit"><Link to="/">Sign Up</Link></button>
        </div>
      </div>
    </form>
  );
};
export default SignUp;
