import React ,{useState} from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        faculty:'',
        phone:'',
        email: '',
        password: '',
    });
    const[error,setError]=useState('');
    const navigate=useNavigate();
  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };
  async  function handleRegister(e) {
        e.preventDefault();
        // Handle registration logic here, e.g., sending data to a server.
        console.log(formData);
        try {
            const response=await fetch( 'http://localhost:5000/Registermember',{
                method:'GET',
                headers:formData
            })
            const check=await response.json();
            if(check.message==='Data Saved in Server'){
                navigate('/Login')
            }
            else{
                setError(check.message);
            }
        } catch (error) {
            console.log('Error While sending data to backend:',error)
        }
    };
    return (
        <div className="register-page">
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-container">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className="inputRegister"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="faculty">Faculty</label>
                        <input
                            type="text"
                            id="faculty"
                            name="faculty"
                            value={formData.faculty}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="Phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Register</button>
                    {error?(<p>{error}</p>):(<p></p>)}
                </form>
            </div>
        </div>
    )
}
export default Register;