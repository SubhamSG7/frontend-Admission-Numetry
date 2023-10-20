import React, { useState } from 'react';
import './StudentReg.css';
import { useNavigate } from 'react-router-dom';

const StudentReg = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dob: '',
        address: '',
        gender: 'male',
        course: '',
    });
    const navigate=useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleRegister(e) {
        e.preventDefault();
        // Handle registration logic here.
        console.log(formData);
        try {
            const response = await fetch('http://localhost:5000/Registerstudent', {
                method: 'GET',
                headers: formData
            })
            const resp=await response.json()
            console.log(resp)
            if(resp.message==='Data Saved in Server'){
                navigate('/StudentLogin');
            }
        } catch (error) {
            console.log('error sending student data to server:', error)
        }
    };

    return (
        <div className="registration-page">
            <div className="registration-form">
                <h2>Student Registration</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-container">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
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
                            required
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
                            required
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
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="course">Course</label>
                        <input
                            type="text"
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button onClick={(e) => { handleRegister(e) }}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default StudentReg;
