import React, { useState } from "react";
import styles from './contact.module.scss';
import Heading from "./heading";



const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://www.gourlay.me:5000"	, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className={styles.contact}>
      <div className="wrapper">
        <Heading title="get in touch" id="contact"/>
        <div className={styles.contactInner}>
          <div className={styles.contactInformation}>
            <p>
              If you'd like to work together please get in touch by email, LinkedIn or send me a message.
            </p>
            <a href="mailto:nick@gourlay.me" className={styles.emailSection}> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
            <span className="sr-only">Email:</span>
            nick@gourlay.me
            </a>
            <a href={'https://www.linkedin.com/in/nickgourlay/'} target="_blank" rel="noreferrer" className={styles.linkedInSection}>
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" ><path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" /></svg>
              LinkedIn
            </a>
        </div>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} id="contact" className={styles.form}>
              <div className={styles.input}>
                <label htmlFor="name" className="sr-only">Name:</label>
                <input type="text" id="name" placeholder="name" required />
              </div>
              <div className={styles.input}>
                <label htmlFor="email" className="sr-only">Email Address:</label>
                <input type="email" id="email" placeholder="email address" required />
              </div>
              <div className={styles.message}>
                <label htmlFor="message" className="sr-only">Message:</label>
                <textarea id="message" placeholder="get in touch!" required />
              </div>
              <button type="submit" className={styles.submit}>{status}</button>
            </form>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;