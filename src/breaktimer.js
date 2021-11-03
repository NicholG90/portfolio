import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './projects.module.css'
import breaktimer from "./assets/breaktimer.jpg";
import github from "./assets/github.png";




function BreakTimer() {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
  

  return (
    <div id="breaktimer" className={styles.breaktimer}>
    <div className={styles.descriptor}>
      <h2>This is a Break Timer App</h2>
      <p>
        Built this cocktail app blah blah
      </p>
      <ul>
        <li>Built with JQuery</li>
        <li>HTML/CSS</li>
      </ul>
      <p>Check out a live demo <a href={'http://countdown.gourlay.me'}>HERE</a></p>
      <a href={'https://github.com/NicholG90/countdown'} target="_blank"><img src={github} altText="GitHub Logo" className={styles.logoimage}/></a>
    </div>
      <img src={breaktimer} alt="Cocktail Website" className={styles.screenshot} onClick={openModal}/>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      contentLabel="Ingredients Modal"
    >
      <button onClick={closeModal}>close</button>
    </Modal>
  </div>
  );
}

export default BreakTimer;
