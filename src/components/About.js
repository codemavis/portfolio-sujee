import React from 'react';
import '../App.css';

import Skills from './Skills'

function About() {
    return (
        <section id="one">
            <header className="major">
                <h2>About</h2>
            </header>
            <p>A versatile and professional developer with experience of developing innovative and creative software solutions.
            Have gained commercial experience with exposure to software development including carrying out straightforward design,
				testing or support of network design and solutions following existing methodologies.</p>

            <Skills />
            <p />

            <ul className="actions">
                <li><a href="https://www.dropbox.com/s/kf7n2j8n02mqf89/Res_Sujeewanandh_S.pdf?dl=0"
                    target="_blank" rel="noopener noreferrer" className="button">Download CV</a></li>
            </ul>

        </section>
    );
}

export default About; 