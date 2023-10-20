import React from 'react';
import './Institute.css'
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';


const Institute = () => {

    return (
        <div>
            <div className='InstituteContainer'>
            <div className='InstituteNavContainer'>
                <LeftNav />
            </div>
            <div className='InstituteDetailDiv'>
                    <div className='headerSection'>
                        <h1>JNU-Jawaharlal Nehru University</h1>
                    </div>
                    <div className='MainSectionInstitute'>
                            <img src="https://jnu.ac.in/sites/default/files/conference.jpg" alt="" />
                            <p>Jawaharlal Nehru University is a public research university located in South West Delhi, India. It was established in 1969 and named after Jawaharlal Nehru, India's first Prime Minister. The university is known for leading faculties and research emphasis on social sciences and applied sciences</p>
                    </div>
                    <p className='AddressDiv'>Address: New Mehrauli Road, JNU Ring Rd, New Delhi, 110067</p>
            </div>
            <div className='RightNavDiv'>
                <RightNav/>
            </div>
        </div>
        <div className='FooterInstituteDiv'>
                <div className='footerdiv'>
                    <h3>Links</h3>
                    <img src={facebook} alt="imagesFolder" className='ImageLINK'/>
                    <img src={instagram} alt='imagesFolder' className='ImageLINK'/>
                </div>
                <div className='footerdiv'>
                    <h3>Contacts</h3>
                    <p>324567881</p>
                    <p>567778925</p>
                </div>
                <div >
                    <h3>Promte</h3>
                </div>
        </div>
        </div>
    );
};

export default Institute;
