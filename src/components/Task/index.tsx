import React, { useState } from 'react';

import styles from './styles.module.css';
import { Check, Trash } from '@phosphor-icons/react';
import { ITask } from '../../App';

interface ITaskItem {
 task: ITask;
 handleRemoveTask: (id: string) => void;
 handleCheckTask: (id: string) => void;
}

const Task = ({ task, handleRemoveTask, handleCheckTask }: ITaskItem) => {
  return (
   <div className={styles.task}>
    {
      task.check === false ? <button onClick={() => handleCheckTask(task.id)} className={styles.circle}></button>
      : <button onClick={() => handleCheckTask(task.id)} className={styles.circleChecked}>
       <Check />
      </button>
    }
    <p className={task.check === true ? styles.textChecked : styles.textUnchecked}>
     {task.content}
    </p>
    
    <button onClick={() => handleRemoveTask(task.id)} className={styles.buttonRemove}>
     <Trash size={24}/>
    </button>
   </div>
  );
}

export default Task;