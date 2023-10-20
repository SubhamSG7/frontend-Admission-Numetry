import React, { useState } from "react";
import './Course.css';

const Course = () => {
    const[input,setInput]=useState({
        dept:"",
        value:""
    })
    return (
       <div>
         <div className="CourseContainer">
            <div className="SingleCourse">
                <h2>B.Tech</h2>
                <label htmlFor="dept">Department:</label>
                <select name="dept" id="dept">
                    <option value="EE" onChange={(e)=>{setInput({...input,})}}>Electrical</option>
                    <option value='ME'>Mechanical</option>
                    <option value='CS'>Computer-Science</option>
                    <option value='IT'>Information-Technology</option>
                </select>
                <button>Check Fee Structure</button>
            </div>
            <div className="SingleCourse">
                <h2>BA</h2>
                <label htmlFor="dept">Department:</label>
                <select name="dept" id="dept">
                    <option value='PS'>Political Science</option>
                    <option value='PSY'>Psychology</option>
                    <option value='SC'>Sociology</option>
                    <option value='JS'>Journalism</option>
                </select>
                <button>Check Fee Structure</button>
            </div>
            
            <div className="SingleCourse">
                <h2>MA</h2>
                <label htmlFor="dept">Department:</label>
                <select name="dept" id="dept">
                    <option value='MA-PH'>MA Philosophy</option>
                    <option value='MA-PSY'>MA Psychology</option>
                    <option value='MA-SC'>MA Sociology</option>
                    <option value='MA-GEO'>MA Geography</option>
                </select>
                <button>Check Fee Structure</button>
            </div>
            <div className="SingleCourse">
                <h2>PHD</h2>
                <label htmlFor="dept">Department:</label>
                <select name="dept" id="dept">
                    <option value='PHD-MATH'>PHD-Mathematics</option>
                    <option value='PHD-ENG'>PHD-Engineering</option>
                    <option value='PHD-PHY'>PHD-Physics</option>
                    <option value='PHD-MG'>PHD-Management</option>
                </select>
                <button>Check Fee Structure</button>
            </div>
        </div>
       </div>
    )
}
export default Course;