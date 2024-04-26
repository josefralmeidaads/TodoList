import React, { useState } from 'react';

import styles from './styles.module.css';

import logo from '../../assets/logo.svg';
import { PlusCircle } from '@phosphor-icons/react';

interface IHeader {
 handleCreateNewTask: (content: string) => void;
}

const Header = ({ handleCreateNewTask }: IHeader) => {
  const [text, setText] = useState<string>('');
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
      value={text}
      onChange={(e) => setText(e.target.value)} 
     />

     <button onClick={() => handleCreateNewTask(text)} className={styles.todoButton}>
      Criar
      <PlusCircle size={20}/>
     </button>
    </div>
   </div>
  );
}

export default Header;