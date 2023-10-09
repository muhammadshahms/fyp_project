import React, { useState } from 'react'
import styles from './Login.module.css'
import InputController from './inputcontrollers/InputController';
import { Link , useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth } from '../firebase';


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
   
      email: "",
      pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
      if (!values.email || !values.pass) {
          setErrorMsg("Please fill all the fields");
          return;
      }
      else {
          setErrorMsg("");
          setsubmitButtonDisabled(true);
          signInWithEmailAndPassword(auth, values.email, values.pass).then(async( res) => {
              setsubmitButtonDisabled(false);
              const user = res.user;
              await updateProfile(user,{displayName:values.name})
              console.log(res)
              navigate("/")

          }).catch((error) => {
              setsubmitButtonDisabled(false);
              setErrorMsg("Email or Password in Invalid");
              console.log("Error", error)
          });
      }
  }


// 32:48
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
           <h1 className={styles.heading}>Login</h1>   
           <InputController label={"Email"} placeholder = "Enter email" onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}/> 
           <InputController label={"Password"} placeholder = "Enter Enter Password" onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}/> 
           <div className={styles.footer}>
            <b className={styles.error}> {errorMsg}</b>
            
            <button disabled={submitButtonDisabled } onClick={handleSubmission}>Login</button>
            <p>Don't have an account? <span><Link to="/signup">Sign up</Link></span> </p>
           </div>
        
        </div>
      
    </div>
  )
}

export default Login