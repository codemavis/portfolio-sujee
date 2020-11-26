import React from 'react';
import '../App.css';
//Avatar
import avatar from '../images/avatar.jpg';

//Icons
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function SideNav() {
    return (
        <div>
            <header id="header">
                <div className="inner">
                    <a href="https://www.linkedin.com/in/anandh-sujee/" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><span style={{ fontWeight: "bold" }}>Sujeewanandh Sathasivam</span></h1>
                    <h1>Technical Consultant | Full stack developer</h1>
                </div>

                <div className="inner">
                    <ul className="icons">
                        <li>
                            <a href="https://www.linkedin.com/in/anandh-sujee/" rel="noopener noreferrer" target="_blank" className="icon">
                                <FaLinkedinIn className="icon-social" size={27} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/codemavis" rel="noopener noreferrer" target="_blank" className="icon">
                                <FaGithub className="icon-social" size={27} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/suji4real" rel="noopener noreferrer" target="_blank" className="icon ">
                                <FaTwitter className="icon-social" size={27} />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:sathasivam.sujee@gmail.com" rel="noopener noreferrer" className="icon">
                                <FaEnvelope size={27} className="icon-social" />
                            </a>
                        </li>
                    </ul>

                </div>
            </header>
        </div>
    );
}

export default SideNav;