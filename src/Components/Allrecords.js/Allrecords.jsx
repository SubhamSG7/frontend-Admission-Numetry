import React from "react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import './Allrecords.css'
import Footer from "../Footer/Footer";

const Allrecords = () => {
    const [studentdata, setStudentdata] = useState('');
    const [memberdata, setMemberdata] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchdata() {
            const email = Cookies.get('email');
            try {
                const response = await fetch('http://localhost:5000/Allrecords', {
                    method: 'GET',
                    headers: { email }
                })
                const resp = await response.json();
                if (resp.message === 'Authorised') {
                    setLoading(false);
                    setMemberdata(resp.memberdata);
                    setStudentdata(resp.studentdata);
                }
            } catch (error) {
                console.log('Error fetching data from DB', error);
            }
        }
        fetchdata();
    }, [])
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
              <div>
            <div className="headrecord">
                    <h1>Welcome to Record Details Page</h1>
            </div>
            <div className="table-flex">
                <div>
                    <table className="member-table">
                        <thead>
                            <h2 className="H2Tag">Member Table</h2>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {memberdata.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className='student-table'>
                        <thead>
                            <h2 className="H2Tag">Student Table</h2>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentdata.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.course}</td>
                                    <td>{item.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Allrecords;