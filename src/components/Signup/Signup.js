import React, {useState} from 'react';
import styles from './Signup.css';
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from "../../firebase";

function Signup() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errMsg, setErrMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
      if(!values.name || !values.email || !values.password){
        setErrMsg("Fill all the fields");
        return;
      };
      setErrMsg("");

      setSubmitButtonDisabled(true);

      createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res)=>{
        setSubmitButtonDisabled(false);
        let user = res.user;
        await updateProfile(user, {
          displayName: values.name
        });
        navigate('/login');
      })
      .catch((err)=>{
        setSubmitButtonDisabled(false);
        setErrMsg(err.message);
        console.log(err, "error")
      });
    }
    
  return (
    <div className="container">
        <div className="innerBox">
            <h1 className="heading">Signup</h1>
            <InputControl 
            label="Name" 
            placeholder="Enter your name" 
            type="text" 
            onChange={(e) => setValues((prev) => ({...prev, name:e.target.value}))} 
            />
            <InputControl 
            label="Email" 
            placeholder="Enter email address" 
            type="email" 
            onChange={(e) => setValues((prev) => ({...prev, email:e.target.value}))} 
            />
            <InputControl 
            label="Password" 
            placeholder="Enter Password" 
            type="password" 
            onChange={(e) => setValues((prev) => ({...prev, password:e.target.value}))} 
            />
            <div className="footer">
              <b className="error">{errMsg}</b>
                <button 
                onClick={handleSubmit}
                disabled={submitButtonDisabled}
                >
                  Signup
                </button>
              <p>
                Already have an account? {" "}
                <span>
                    <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
        </div>
    </div>
    
  )
}

export default Signup