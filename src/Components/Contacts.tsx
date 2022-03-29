import React, { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_am934jd",
        "template_nw1v2vj",
        e.currentTarget,
        "PBIZBBcMthSFcj_iU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contacts">
      <h1> Contact me</h1>
      <div className="content">
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5593.067460449272!2d9.169860246194622!3d45.49933343144474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c0e05cc05ab5%3A0x53550c6a5f5d69e!2sVia%20Privata%20Catone%2C%2027%2C%2020158%20Milano%20MI!5e0!3m2!1sit!2sit!4v1648543291479!5m2!1sit!2sit"
            width="800"
            height="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="divForm">
          <form onSubmit={sendEmail}>
            <p> Name </p>
            <input
              className="name"
              name="name"
              onChange={handleInput}
              value={name}
            ></input>
            <p> Email </p>
            <input
              className="email"
              name="email"
              onChange={handleInput}
              value={email}
            ></input>
            <p> Subject </p>
            <input
              className="subject"
              name="subject"
              onChange={handleInput}
              value={subject}
            ></input>
            <p> Message </p>
            <textarea
              className="message"
              name="message"
              onChange={handleInput}
              value={message}
            ></textarea>
            <button className="submit-button"> Submit </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
