import React from 'react';

import styles from './styles.module.css';
import { Circle, Trash } from '@phosphor-icons/react';

const Task = () => {
  return (
   <div className={styles.task}>
    <Circle className={styles.circle} size={24}/>
    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
    <Trash size={24}/>
   </div>
  );
}

export default Task;