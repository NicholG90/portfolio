import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './breaktimer.module.css'
import breaktimer from "./assets/breaktimer.jpg";




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
    </div>
      <img src={breaktimer} alt="Cocktail Website" className={styles.breaktimerimage} onClick={openModal}/>
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
