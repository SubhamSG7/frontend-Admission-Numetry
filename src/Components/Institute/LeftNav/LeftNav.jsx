import React, { useState } from 'react';
import './LeftNav.css'
import { Link } from 'react-router-dom';
function LeftNav() {
    // State variable to control the visibility of the details
    const [courses, setCourses] = useState(false);
    const [btech, setBtech] = useState(false);
    const [masters, setMasters] = useState(false);
    const [phd, setPhd] = useState(false);
    const [ba, setBa] = useState(false);

    // Function to toggle the visibility of the details
    const toggleDetails = () => {
        setCourses(!courses);
    };
    const toggleCourses = (e) => {
        if (e.target.value === 'BA') {
            setBa(!ba);
        }
        if (e.target.value === 'BTECH') setBtech(!btech);
        if (e.target.value === 'MASTERS') setMasters(!masters);
        if(e.target.value ==='PHD') setPhd(!phd);
    }
    return (
        <div className='LeftNavContainer'>
            <button onClick={toggleDetails} className='CourseBTN'>Courses</button>

            {courses && (
                <div className='CoursesDiv'>
                    <h2>Courses We Provide.</h2>
                    <button onClick={(e) => { toggleCourses(e) }} value='BA' id='CourseBTN'>BA</button>
                    {ba && (
                        <div className='SingleCourseDiv'>
                            <h3>BA</h3>
                            <p>The full form of B. A is Bachelor of Arts. BA is one of the most demanding undergraduate programmes in Arts that can be completed in three years. BA can be pursued in various disciplines such as English, Hindi, History, Journalism, and Psychology.</p>
                            <Link to='/Course'><button>Apply here</button></Link> 
                        </div>
                    )}
                    <button onClick={(e) => { toggleCourses(e) }} value='BTECH' id='CourseBTN'>Bachelor In Technology</button>
                    {btech && (
                        <div className='SingleCourseDiv'>
                            <h3>B.TECH</h3>
                            <p>B. Tech full form is Bachelor of Technology. It is one of the prestigious and most popular courses opted by science students. It is a 4-year full-time undergraduate course and is offered in various disciplines such as Computer Science, Civil, Mechanical, Electronics, and Information Technology.</p>
                            <Link to='/Course'><button>Apply here</button></Link> 
                        </div>
                    )}
                    <button onClick={(e) => { toggleCourses(e) }} value='MASTERS' id='CourseBTN'>Masters</button>
                    {masters && (
                        <div className='SingleCourseDiv'>
                            <h3>MASTERS</h3>
                            <p>A master's degree is an academic qualification granted at the postgraduate level to individuals who have successfully undergone study demonstrating a high level of expertise in a specific field of study or area of professional practice</p>
                            <Link to='/Course'><button>Apply here</button></Link> 
                        </div>
                    )}
                    <button onClick={(e) => { toggleCourses(e) }} value='PHD' id='CourseBTN'>PHD</button>
                    {phd && (
                        <div className='SingleCourseDiv'>
                            <h3>PHD</h3>
                            <p>PhD is short for Doctor of Philosophy. This is an academic or professional degree that, in most countries, qualifies the degree holder to teach their chosen subject at university level or to work in a specialized position in their chosen field.</p>
                         <Link to='/Course'><button>Apply here</button></Link>  
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default LeftNav;
