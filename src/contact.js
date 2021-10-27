import React from 'react';
import styles from './contact.module.css'


function Contact() {

  return (
    <div id="contact">
      <header>
      <h1>Contact</h1>
      </header>
      <form>
      <label>
          Name:
          <input type="text"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
