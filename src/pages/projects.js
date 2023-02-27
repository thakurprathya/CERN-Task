import * as React from 'react';
import '../styles/global.css';
import {Link} from 'gatsby';

// components
import Navbar from '../components/Navbar';

// images
import univLogo from '../images/univLogo.png';
import facebookLogo from '../images/facebookLogo.png';


const projects = () => {
    return (
        <>
            <header>
                <Navbar/>
                <div className='headDiv'>
                    <h1>Projects page</h1>
                    <h2>Sub-Heading</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione, libero maiores nisi totam nulla quasi veniam alias consectetur deserunt, sapiente non. Tempora rerum quisquam aperiam saepe ex velit nisi possimus maxime porro corrupti? Quae minima tempora fugiat, libero, accusantium sint deleniti perspiciatis aliquam reiciendis modi earum illo commodi totam!</h4>
                </div>
            </header>
            <footer>
                <div className="footDiv">
                    <div className="info">
                        <h2>Organisation Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore molestias magnam aliquam sint, possimus cum iste vitae ut dignissimos sunt eligendi. Ad impedit velit fugiat, aspernatur ea blanditiis molestiae!</p>
                        <div className="links">
                            <Link to="#">social link 1<img src={facebookLogo} alt="icon"/></Link>
                            <Link to="#">social link 2<img src={facebookLogo} alt="icon"/></Link>
                            <Link to="#">social link 3<img src={facebookLogo} alt="icon"/></Link>
                            <Link to="#">social link 4<img src={facebookLogo} alt="icon"/></Link>
                        </div>
                    </div>
                    <div className="sponsors">
                        <h2>Sponsors</h2>
                        <div className="images">
                            <img src={univLogo} alt="Sponsor_Logo" />
                            <img src={univLogo} alt="Sponsor_Logo" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, est. Repudiandae cum magnam, a, quisquam neque dolores nihil expedita accusantium unde deleniti omnis quam reprehenderit veniam? Repudiandae cupiditate praesentium ducimus sapiente quibusdam, molestias labore, autem quis nihil fugit molestiae in.</p>
                    </div>
                </div>
                <p className="notice">Copyright 2023 - HSF Organisation</p>
            </footer>
        </>
    )
};

export const Head = () => <title>HSF -Projects</title>;
export default projects;
