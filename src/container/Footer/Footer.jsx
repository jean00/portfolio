import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { HiDocumentText } from 'react-icons/hi';
import { Menu, MenuItem } from './menu';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdf, setPdf] = useState([]);
  const { username, email, message } = formData;

  useEffect(() => {
    const query = '*[_type == "curriculumVitae"] {"curriculum": curriculum.asset->url}';

    client
      .fetch(query)
      .then((data) => {
        setPdf(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const menu = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },

    open: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    variants: {
      closed: { x: -16, opacity: 0 },
      open: { x: 0, opacity: 1 },
    },

    transition: { opacity: { duration: 0.2 } },
  };

  const [open, setOpen] = useState(false);

  const handlePopup = () => setOpen(!open);

  return (
    <>
      <h2 className="head-text">Contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jeanlouis433@gmail.com" className="p-text">
            jeanlouis433@gmail.com
          </a>
        </div>
        {/*         <div className="app__footer-card">
          <HiDocumentText className="icon" />
          <a href={pdf[0]?.curriculum} download="CV Mosquera" target="_blank" rel="noreferrer" className="p-text">
            My curriculum vitae (ita)
          </a>
        </div> */}
        <div className="app__footer-card" onClick={handlePopup}>
          <HiDocumentText className="icon" />
          <Menu
            /*  className="app__footer-menu" */
            label="Curriculum vitae"
            open={open}
            setOpen={handlePopup}
            animate={open ? 'open' : 'closed'}
            initial="closed"
            exit="closed"
            variants={menu}
          >
            <MenuItem {...item}>
              {' '}
              <a href={pdf[0]?.curriculum} download="Mosquera Escobar Jean Louis CV_it" target="_blank" rel="noreferrer" className="p-text">
                Mosquera Escobar Jean Louis CV (It)
              </a>
            </MenuItem>
            <MenuItem {...item}>
              {' '}
              <a href={pdf[1]?.curriculum} download="Mosquera Escobar Jean Louis CV_en" target="_blank" rel="noreferrer" className="p-text">
                Mosquera Escobar Jean Louis CV (En)
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
