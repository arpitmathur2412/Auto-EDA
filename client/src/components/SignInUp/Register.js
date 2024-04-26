import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RegisterStyles.css'


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    // const [date, setDate] = useState('')

    const navigate=useNavigate();

    async function handleSubmit(e){
  
        const host="http://localhost:5000"
        e.preventDefault();

            // console.log(email,pass);
        const response = await fetch(`${host}/api/auth/createuser`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({name:name,email:email,password:pass}) 
        });
    
        const json=await response.json()
        console.log(json.authtoken)
        if(json.success1){
            // save the auth-token and redirect
            localStorage.setItem('token',json.authtoken)
            navigate("/service")
        }
        else {
            alert("Invalid credentials")
        }
        // take input
    }


    return (
        <div className="auth-form-container">
            <div className="new-constraints">

            <form className="register-form" onSubmit={handleSubmit}><h2>Register</h2>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br></br>
                <button type="submit"><h5>Sign up</h5></button>
            </form>
            <br></br>
            <button className="link-btn" onClick={() => props.onFormSwitch('signin')}><strong>Already have an account? Login here.</strong></button>
            </div>
        </div>
    )
}

export default Register