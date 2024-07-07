import React, { useState } from 'react';
import './BusinessCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function BusinessCard({ name, jobTitle, email, phone, website, profilePic }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="business-card">
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h2>{name}</h2>
          <p>{jobTitle}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Website: {website}</p>
          <div className="social-media">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="card-back">
          <h2>More Info</h2>
          <p>Additional information goes here.</p>
        </div>
      </div>
      <button className="flip-button" onClick={() => setIsFlipped(!isFlipped)}>
        {isFlipped ? 'Show Front' : 'Show Back'}
      </button>
    </div>
  );
}

export default BusinessCard;
