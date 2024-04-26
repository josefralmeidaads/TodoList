import React from 'react';

import styles from './styles.module.css';

import logo from '../../assets/logo.svg';
import { PlusCircle } from '@phosphor-icons/react';

const Header = () => {
  return (
   <div>
    <header className={styles.header}>
     <img src={logo} alt="logo" />
    </header>

    <div className={styles.containerTodo}>
     <input 
      className={styles.todoText} 
      type="text"
      placeholder='Adicione uma nova tarefa' 
     />

     <button className={styles.todoButton}>
      Criar
      <PlusCircle size={20}/>
     </button>
    </div>
   </div>
  );
}

export default Header;