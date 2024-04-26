import React from 'react';

import styles from './styles.module.css';

import clipBoard from '../../assets/clipboard.svg';
import Task from '../Task';

const Main = () => {
  return (
   <div className={styles.main}>
    <div className={styles.tasksList}>
     <strong className={styles.taskCreate}>
      Tarefas criadas
      <span>0</span>
     </strong>

     <strong className={styles.taskCcompleted}>
      Concluídas
      <span>2 de 5</span>
     </strong>
    </div>

    {/* <div className={styles.boxEmptyWithBorder}>
     <img src={clipBoard} alt="quadro de copiar e colar" />
     <strong>Você ainda não tem tarefas cadastradas</strong>
     <p>Crie tarefas e organize seus itens a fazer</p>
    </div> */}

    <div className={styles.boxEmpty}>
     <Task />
     <Task />
     <Task />
    </div>
   </div>
  );
}

export default Main;