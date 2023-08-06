import React from 'react';
import './Login.css';
import InputControl from '../InputControl/InputControl';
import { Link } from 'react-router-dom';
import{useState} from 'react';
import{useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase';

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: ""
});

const [errMsg, setErrMsg] = useState("");
const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
const navigate = useNavigate();

const handleSubmission = () => {
  if(!values.email || !values.password){
    setErrMsg("Fill all the fields");
    return;
  };
  setErrMsg("");

  setSubmitButtonDisabled(true);

 signInWithEmailAndPassword(auth, values.email, values.password)
  .then(async(res)=>{
    setSubmitButtonDisabled(false);
    navigate('/');
  })
  .catch((err)=>{
    setSubmitButtonDisabled(false);
    setErrMsg(err.message);
    console.log(err, "error")
  });
}
  return (
    <div className="container">
        <div className="inner-box">
            <h1 className="heading">Login</h1>
            <InputControl 
            label="Email" 
            placeholder="Enter email address" 
            type="email"
            onChange={(e)=>setValues((prev) => ({...prev, email:e.target.value}))} />
            <InputControl 
            label="Password" 
            placeholder="Enter Password" 
            type="password"
            onChange={(e)=>setValues((prev) => ({...prev, password:e.target.value}))} />

            <div className="footer">
              <p className="error">{errMsg}</p>
                <button onClick={handleSubmission} disabled={submitButtonDisabled}>Login</button>
              <p>
                Don't have an Account? {" "}
                <span>
                    <Link to="/signup">Signup</Link>
                </span>
              </p>
            </div>
        </div>
        
    </div>
  )
}

export default Login