import React from 'react';
import '../styles/card.css';
import {Link} from 'gatsby';

const Card = ({data}) => {
    const {heroImage, name, description, videos, repository, webpage, status} = data.node;
    return (
        <div className={`card ${status}`}>
            <img src={heroImage} alt="HeroImg" />
            <div className="dataBox">
                <h2 dangerouslySetInnerHTML={{ __html: description }} id="heading"/>
                <p><strong>Technology:</strong> {name}</p>
                <div className="links">
                    {videos ? <h4><Link to={videos}>📒 Start Learning Now!!</Link></h4> : <h4>No Courses Available!!</h4>}
                    {repository ? <h4><Link to={repository}>📌 Contribute Now!!</Link></h4> : <h4>No Repository information Available!!</h4>}
                    {webpage ? <h4><Link to={webpage}>🧑‍💻 Connect with Us!!</Link></h4> : <h4>No Website Info!!</h4>}
                </div>
            </div>
        </div>
    )
};

export default Card;
