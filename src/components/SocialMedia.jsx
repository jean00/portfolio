import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/jean00" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/jean-louis-mosquera-escobar-6632b71ab"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="mailto:jeanlouis433@gmail.com">
        <div>
          <FiMail />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
