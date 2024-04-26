import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignInStyles.css'

const SignIn = (props) => {
    const navigate=useNavigate();
    const host="http://localhost:5000"
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
          body: JSON.stringify({email:email,password:pass}) 
        });

        const json=await response.json()
        console.log(json)

        if(json.success){
            // save the auth-token and redirect
            localStorage.setItem('token',json.authtoken)
            navigate("/service")
        }
        else {
            alert("Invalid credentials")
            
        }
    //     catch the input from here
    }

    return (
        <div className="auth-form-container">
            <div className="new-constraints">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br></br>
                <button type="submit"><h5>Log In</h5></button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}><strong>Don't have an account? Register here</strong></button>
        </div>
        </div>
    )
}

export default SignIn



