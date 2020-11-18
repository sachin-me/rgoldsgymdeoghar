import React, { useEffect, useState } from 'react';
import './ClassDetails.css';
import class1 from '../../images/ourClasses/class-1.jpg';
import class2 from '../../images/ourClasses/class-2.jpg';
import class3 from '../../images/ourClasses/class-3.jpg';
import class4 from '../../images/ourClasses/class-4.jpg';
import class5 from '../../images/ourClasses/class-5.jpg';
import class6 from '../../images/ourClasses/class-6.jpg';
import { Button } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';

const ClassDetails = () => {
    const [classImg, setClassImg] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/physioTraining') {
            setClassImg(class1)
        }
        else if (location.pathname === '/selfDefense') {
            setClassImg(class2)
        }
        else if (location.pathname === '/advanceGym') {
            setClassImg(class3)
        }
        else if (location.pathname === '/cardioTraining') {
            setClassImg(class4)
        }
        else if (location.pathname === '/strengthTraining') {
            setClassImg(class5)
        }
        else if (location.pathname === '/physioTraining2') {
            setClassImg(class6)
        }
    }, [location.pathname])

    return (
        <main className='classDetails'>
            <section>
                <img src={classImg} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut delectus soluta, a architecto tempora necessitatibus provident eius modi temporibus veniam maxime voluptatem aliquam, nihil voluptate quibusdam? Repellendus, tempora quod. Inventore ratione cupiditate repellendus recusandae accusantium, architecto fugit ad! Nobis ex totam animi. Expedita aut ex blanditiis corrupti excepturi beatae ullam minus debitis recusandae! Ipsa excepturi vitae in, quaerat numquam unde.</p>
                <ul>
                    <li>Having Slimmer Shapely Things</li>
                    <li>Getting Stronger Body</li>
                    <li>Increased Metabolism</li>
                    <li>Increased Muscular Endurance</li>
                    <li>Maximum Results in Less Time</li>
                    <li>Firm Hips and Tummy</li>
                </ul>
            </section>
            <section>
                <div>
                    <h2><span style={{ color: 'goldenrod' }}>CLASS</span> SCHEDULE</h2>
                    <div>
                        <div>
                            <h4>Monday</h4>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                        <div>
                            <h4>Tuesday</h4>
                            <p>10:00 AM - 11:00 AM</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Wednesday</h4>
                            <p>7:00 AM - 8:00 AM</p>
                        </div>
                        <div>
                            <h4>Thursday</h4>
                            <p>5:00 PM - 6:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Friday</h4>
                            <p>6:00 AM - 7:00 AM</p>
                        </div>
                        <div>
                            <h4>Saturday</h4>
                            <p>7:00 PM - 8:00 PM</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link style={{textDecoration: 'none'}} to='/pricing'><Button>JOIN US</Button></Link>
                </div>
            </section>
        </main>
    );
};

export default ClassDetails;