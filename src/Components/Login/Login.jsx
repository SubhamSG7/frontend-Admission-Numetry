import React from "react";
import './Login.css'
import { useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth,setAuth]=useState('');
    const navigate=useNavigate();

    async function handleLogin(e){
        // Added logic to Login
        e.preventDefault();
        try {
            const response=await fetch('http://localhost:5000/MemberLogin' ,{
                method:'GET',
                headers:{email,password}
            })
            const resp=await response.json();
            setAuth(resp.message);
            if(resp.email)
            {
                const fifteenMinutes = 15 * 60 * 1000;
                const expirationDate = new Date(new Date().getTime() + fifteenMinutes);
                Cookies.set('email', resp.email, { expires: expirationDate });
                navigate('/StudentRecord');
            }
        } catch (error) {
            console.log('error while sending data to serverside',error);
        }
      };
    return (
        <div className="login-page">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={(e)=>{handleLogin(e)}}>Login</button>
                    {auth?(<p>{auth}</p>):(<p></p>)}
                </form>
            </div>
        </div>
    )
}
export default Login;