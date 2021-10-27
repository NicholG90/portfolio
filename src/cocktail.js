import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './cocktail.module.css'
import cocktailimage from "./assets/cocktail.jpg";


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
        <h2>This is a cocktail App</h2>
        <p>
          Built this cocktail app blah blah
        </p>
        <ul>
          <li>Built with ReactJs</li>
          <li>Firebase</li>
        </ul>
        <p>Check out a live demo <a href={'http://cocktails.gourlay.me'}>HERE</a></p>
      </div>
        <img src={cocktailimage} alt="Cocktail Website" className={styles.cocktailImage} onClick={openModal}/>
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
