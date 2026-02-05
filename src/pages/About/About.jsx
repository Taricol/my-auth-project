import React, { useContext } from 'react';
import { valueConText } from '../../RootLayout/RootLayout';

const About = () => {
    const {user}=useContext(valueConText)
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default About;