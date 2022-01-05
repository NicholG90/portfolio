import React, { useState } from "react";
import styles from './contact.module.css'

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
    let response = await fetch("http://localhost:5000/contact", {
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
    <>
    <h2 className={styles.contactHeader}>Get in Touch</h2>
    <div id="contactform" className={styles.contactForm}>
    <form onSubmit={handleSubmit} id="contact" className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="name" required />
      </div>
      <div className={styles.input}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="email address" required />
      </div>
      <div className={styles.message}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="get in touch!" required />
      </div>
      <button type="submit" className={styles.submit}>{status}</button>
    </form>
  </div>
  </>
  );
};

export default ContactForm;