import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './projects.module.css'
import cocktailimage from "./assets/cocktail.jpg";
import github from "./assets/github.png";



function Cocktail() {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
  

  return (
    <div id="cocktail" className={styles.cocktail}>
      <div className={styles.descriptor}>
        <h2>A Cocktail App</h2>
        <p>
          I was able to shake up this Cocktail App
        </p>
        <ul>
          <li>Built with ReactJS</li>
          <li>Uses Firebase for OAuth and Database</li>
        </ul>
        <p>Check out a live demo <a href={'http://cocktails.gourlay.me'}>HERE</a></p>
        <a href={'https://github.com/NicholG90/cocktail-selector'} target="_blank"><img src={github} altText="GitHub Logo" className={styles.logoimage}/></a>
      </div>
        <img src={cocktailimage} alt="Cocktail Website" className={styles.screenshot} onClick={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Ingredients Modal"
      >
      <iframe src={'http://cocktails.gourlay.me'} width="100%" height="100%"></iframe>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default Cocktail;
