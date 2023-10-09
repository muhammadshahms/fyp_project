import React, { useState } from 'react'
import styles from './Signup.module.css'
import InputController from './inputcontrollers/InputController';
import { Link , useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Please fill all the fields");
            return;
        }
        else {
            setErrorMsg("");
            setsubmitButtonDisabled(true);
            createUserWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
                setsubmitButtonDisabled(false);
                 const user = res.user;
                // await updateProfile(user,{displayName:values.name})
                 console.log(res)
                navigate("/login")

            }).catch((error) => {
                setsubmitButtonDisabled(false);
                setErrorMsg("Email is already in use");
                console.log("Error", error)
            });
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Sign Up</h1>
                <InputController label={"Name"} placeholder="Enter your name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                <InputController label={"Email"} placeholder="Enter your email" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                <InputController label={"Password"} placeholder="Enter Enter Password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>

                    <button onClick={handleSubmission} disabled={submitButtonDisabled}>Sign Up</button>
                    <p>Already have an account? <span><Link to="/login">Log in</Link></span> </p>
                </div>

            </div>

        </div>
    )
}

export default Signup;