import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import './StudentRecord.css'
import Footer from "../Footer/Footer";


const StudentRecord = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [facultydata,setFacultyData]=useState('');
  useEffect(() => {
    // Fetch data from your backend API using a library like axios or the built-in fetch function
    const email = Cookies.get('email');
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/StudentRecord', {
          method: 'GET',
          headers: { email }
        })
        const memberResp= await fetch('http://localhost:5000/MemberDashboard',{
          method:'GET',
          headers:{ email }
        })
        const faculty=await memberResp.json();
        if(faculty){
          setFacultyData(faculty);
        }
        const resp = await response.json();
        if (resp.message === 'Authorised') {
          setLoading(false);
          setData(resp.data);
        }
      } catch (error) {
        console.log('Error while fetching data from backend', error);
      }
    }
    fetchData();
  }, [facultydata]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Contain">
      <div className="header1">
        {facultydata?(<div>
          <h2>Hii, {facultydata.firstname}</h2>
          <h3>Welcome</h3>
        </div>):(<p></p>)}
        {facultydata?(<div className="Divheader2">
          <div>
          <p className="ptagname">{facultydata.firstname} {facultydata.lastname}</p>
          <p className="PtagFaculty">Faculty: {facultydata.faculty}</p>
          <p className="PtagFaculty">Dept-id: {facultydata.deptId}</p>
          </div>
          <div>
          <p className="ptagemail"> {facultydata.email}</p>
          <p className="PtagFaculty">Ph: {facultydata.phone}</p>
          <p className="PtagFaculty">Faculty-id: {facultydata.facultyId}</p>
          </div>
        </div>):(<p></p>)}
      </div>
      <h1 className="h1tagStudent">Student-Records</h1>
      <table className='data-table'>
        <thead>
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
          {data.map((item) => (
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
      <Footer/>
    </div>
  )
}
export default StudentRecord;