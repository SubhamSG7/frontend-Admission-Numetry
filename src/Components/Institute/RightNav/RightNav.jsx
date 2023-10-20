import React, { useState } from "react";
import jnu1 from '../Images/jnu1.jpeg';
import jnu2 from '../Images/jnu2.webp';
import './RightNav.css';

const RightNav = () => {
    const [clicked, setClicked] = useState(false);
    const[about,setAbout]=useState(false);
    const [history,setHistory]=useState(false);
    const [Placements,setPlacements]=useState(false);
    function hanleClicked() {
        setClicked(!clicked);
    }
    function handleSections(e){
        if(e.target.value==='ABOUT') setAbout(!about);
        if(e.target.value==='HISTORY') setHistory(!history);
        if(e.target.value==='PLACEMENTS') setPlacements(!Placements);
    }
    return (
        <div className="RightNavContainer">
            <button onClick={hanleClicked} id="RightNavBTN">About us</button>
            {clicked && (
                <div className='AboutDivRight'>
                    <button onClick={(e)=>{handleSections(e)}} value='ABOUT' className="RightNavBTN">About</button>
                    {about && (
                        <div className="SingleRightDiv">
                            <h3>JNU(Jawaharlal Nehru University)</h3>
                            <p>Jawaharlal Nehru University, established in 1969, is a vibrant campus. The university has an area of about 1000 acres and currently 7300 students are residing in 17 Hostels and studying under around 550 reputed faculties.</p>
                            <div>
                                <img src={jnu1} alt="imagedFolder" className="RightNavImg" />
                                <img src={jnu2} alt="imagesFolder" className="RightNavImg" />
                            </div>
                        </div>
                    )}
                    <button onClick={(e)=>{handleSections(e)}} value='HISTORY' className="RightNavBTN">History</button>
                    {history && (
                        <div className="SingleRightDiv">
                            <h3>JNU-History</h3>
                            <p>Jawaharlal Nehru University was established in 1969 by an act of parliament.[6] It was named after Jawaharlal Nehru, India's first Prime Minister. G. Parthasarathy was the first vice-chancellor.[7] Prof. Moonis Raza was the Founder Chairman and Rector.[8][9] The bill for the establishment of Jawaharlal Nehru University was placed in the Rajya Sabha on 1 September 1965 by the then-Minister of Education, M. C. Chagla. During the discussion that followed, Bhushan Gupta, member of parliament, voiced the opinion that this should not be yet another university. New faculties should be created, including scientific socialism, and one thing that this university should ensure was to keep noble ideas in mind and provide accessibility to students from weaker sections of society. The JNU Bill was passed in Lok Sabha on 16 November 1966 and the JNU Act came into force on 22 April 1969.[10]</p>
                        </div>
                    )}
                    <button onClick={(e)=>{handleSections(e)}} value='PLACEMENTS' className="RightNavBTN">Placements</button>
                    {Placements && (
                        <div className="SingleRightDiv">
                            <h3>Placements at JNU</h3>
                            <p>The highest On-campus and Off-campus package offered during JNU BTech placements 2023 stood at INR 33 LPA and INR 16 LPA, respectively. Further, the average package offered during JNU BTech placements 2023 stood at INR 11 LPA. Apart from this, according to JNU NIRF report 2023, the median package offered during JNU UG 3-year and PG 2-year placements 2022 stood at INR 6 LPA and INR 7.95 LPA, respectively.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
export default RightNav;