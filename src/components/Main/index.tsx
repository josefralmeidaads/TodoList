import React from 'react';

import styles from './styles.module.css';

import clipBoard from '../../assets/clipboard.svg';
import Task from '../Task';
import { ITask } from '../../App';

interface ITasks {
 tasks: ITask[];
 handleRemoveTask: (id: string) => void;
 handleCheckTask: (id: string) => void;
}

const Main = ({ tasks, handleRemoveTask, handleCheckTask }: ITasks) => {
  const taskCompleted = tasks.filter((task) => task.check === true);
  return (
   <div className={styles.main}>
    <div className={styles.tasksList}>
     <strong className={styles.taskCreate}>
      Tarefas criadas
      <span>{tasks.length}</span>
     </strong>

     <strong className={styles.taskCcompleted}>
      Concluídas
      {taskCompleted.length === 0 ? <span>{taskCompleted.length}</span>
      : <span>{taskCompleted.length} de {tasks.length}</span>}
     </strong>
    </div>

    {tasks.length === 0 && <div className={styles.boxEmptyWithBorder}>
     <img src={clipBoard} alt="quadro de copiar e colar" />
     <strong>Você ainda não tem tarefas cadastradas</strong>
     <p>Crie tarefas e organize seus itens a fazer</p>
    </div>}

    {tasks.length > 0 && <div className={styles.boxEmpty}>
     {
      tasks.map((task) => (
       <Task 
         key={task.id} 
         task={task} 
         handleRemoveTask={handleRemoveTask}
         handleCheckTask={handleCheckTask} 
        />
       ))
     }
    </div>}
   </div>
  );
}

export default Main;