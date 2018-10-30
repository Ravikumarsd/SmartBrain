import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';
const Logo = () => {
    return (
        <Tilt className='Tilt Logo'
              options={{ max: 25,speed:2000 }} 
              style={{ height: 200, width: 200, }} >
            <Tilt className="Tilt pa3" 
                options={{ max: 50, scale:1.3, speed:2000,perspective:700, }} 
                style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"> 
                   <img  src={brain}/>
                </div>
            </Tilt>
        </Tilt>
    );
}

export default Logo;