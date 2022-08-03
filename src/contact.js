import React, { useState } from "react";
import styles from './contact.module.scss'
import Heading from "./heading"


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
        <Heading title="get in touch" />
        <div  className={styles.contactForm}>
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
  );
};

export default ContactForm;