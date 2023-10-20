import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import Cookies from 'js-cookie';
import Footer from '../Footer/Footer';

function HomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState('');
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/Login', {
                method: 'GET',
                headers: { email, password }
            })
            const resp = await response.json();
            if (resp.message === 'Authorised') {
                const fifteenMinutes = 15 * 60 * 1000;
                const expirationDate = new Date(new Date().getTime() + fifteenMinutes);
                Cookies.set('email', email, { expires: expirationDate });
                navigate('/Allrecords');
            } else {
                setAuth(resp.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='HomePageContainer'>
            <div className='HeaderContainerHomePage'>
                <header className='header'>
                    <h1>Welcome to Admission Page</h1>
                </header>
            </div>
            <div className='flex'>
                <div className='HomePageFlexone'>
                    <h3>Admin Login</h3>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' id='emailHomePage' required onChange={(e) => { setEmail(e.target.value) }} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type='password' name='password' id='passwordHomePage' required onChange={(e) => { setPassword(e.target.value) }} />
                    <br />
                    <button onClick={(e) => { handleLogin(e) }} id='BTN'>Login</button>
                    {auth ? (<p>{auth}</p>) : (<p></p>)}
                </div>
                <div className='HomePageFlextwo'>
                    <div>
                        <p>Member</p>
                        <Link to='/Register'><button id='BTN'>Register</button></Link>
                        <Link to='/Login'>  <button id='BTN'>Login</button></Link>
                    </div>
                    <div>
                        <p>Student</p>
                        <Link to='/StudentReg'>  <button id='BTN' >Register</button></Link>
                        <Link to='/StudentLogin'>   <button id='BTN' >Login</button></Link>
                    </div>
                </div>
            </div>
            <div className='FooterHomePage'>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
