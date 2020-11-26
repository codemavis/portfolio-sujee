import React from 'react';
import '../App.css';

import About from './About'
import Project from './Projects'
import Contact from './Contact'

function Main() {
    return (
        <div id="main">
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default Main; 