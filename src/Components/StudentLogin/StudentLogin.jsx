import React, { useState } from "react";
import './StudentLogin.css'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const StudentLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth,SetAuth]=useState('');
    const navigate=useNavigate();

async function handleLogin(e){
        // You can implement your login logic here.
        e.preventDefault();
        const email=username;
        try {
            const response=await fetch('http://localhost:5000/StudentLogin',{
                method:'GET',
                headers:{email,password}
            })
            const resp=await response.json();
            if(resp.message==='Authorised'){
                const fifteenMinutes = 15 * 60 * 1000;
                const expirationDate = new Date(new Date().getTime() + fifteenMinutes);
                Cookies.set('email', resp.email, { expires: expirationDate });
                navigate('/Institute')
            }else{
                SetAuth(resp.message);
            }
        } catch (error) {
            console.log('Error sending data to backend from frontend studentlogin:',error);
        }
    };
    return (
        <div className="container">
            <div className="login-box">
                <h2>Student Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={(e)=>{handleLogin(e)}}>Login</button>
                {auth?(<p>{auth}</p>):(<p></p>)}
            </div>
        </div>
    )
}
export default StudentLogin;