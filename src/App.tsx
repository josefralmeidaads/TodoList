import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Main from './components/Main';
import './styles/global.css';

export interface ITask {
  id: string;
  content: string;
  check: boolean;
 }

function App() {
  const onCreateNewTask = (content: string) => {
    setTask([...task, { id: uuidv4(), check: false, content }]);
  }

  const onRemoveTask = (id: string) => {
    const tasksWithouIdTask = task.filter((task) => task.id !== id);
    setTask(tasksWithouIdTask);
  }

  const onCheckTask = (id: string) => {
    const checkedTask = task.map((task) => {
      if(task.id === id){
        return {
          ...task,
          check: !task.check
        }
      } else {
        return {
          ...task
        }
      }
    })
    setTask(checkedTask);
  }

  const [task, setTask] = useState<ITask[]>([]);
  return (
    <>
      <Header 
        handleCreateNewTask={onCreateNewTask}
      />
      <Main 
        tasks={task}
        handleRemoveTask={onRemoveTask}
        handleCheckTask={onCheckTask}
      />
    </>
  )
}

export default App
