import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './SmallLogo.css';
const SmallLogo = () => {
    return (
            <Tilt className="pa1" 
                options={{ max: 50, scale:1.5, speed:2000,perspective:700, }} 
                style={{ height: 100, width: 100 }} >
                   <img alt="brain" src={brain}/>
            </Tilt>
    );
}

export default SmallLogo;