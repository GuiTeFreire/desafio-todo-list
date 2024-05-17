import { Header } from "./components/Header"
import { Newtask } from "./components/Newtask";
import { Button } from "./components/Button";

import styles from './App.module.css';

import './global.css';
import { PlusCircle } from '@phosphor-icons/react'
import { ListHeader } from "./components/Tasks/ListHeader";
import { Empty } from "./components/Tasks/Empty";
import { useState } from "react";
import { Task } from "./components/Tasks/Task";

export interface ITask {
  id: number;
  text: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  
  const checkedTaskCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isDone) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0)

  function handleAddTask() {
    if (!newTaskText) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: newTaskText,
      isDone: false

    }    
    
    setTasks((state) => [...state, newTask])
    setNewTaskText('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja realmente excluir essa tarefa?')) {
      return;
    }

    setTasks(filteredTasks)
  }

  function handleToggleTaskStatus({ id, value}: { id: number; value: boolean}){
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: value}
      }
      return {...task}
    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />
        <section className={styles.content}>
          <div className={styles.taskInfoContainer}>
            <Newtask onChange={(e) => setNewTaskText(e.target.value)}
            value = {newTaskText}/>

            <Button onClick={handleAddTask}>Criar
              <PlusCircle 
                size={16} 
                color="#f2f2f2" 
                weight="bold" />
            </Button>
          </div>

          <div className={styles.tasksList}>
            <ListHeader 
              taskCounter={tasks.length}
              checkedTaskCounter={checkedTaskCounter}/>

              {tasks.length > 0 ? (
                <div>
                  {tasks.map((task) => (
                    <Task 
                      key={task.id}
                      data={task}
                      removeTask={handleRemoveTask}
                      toggleTaskStatus={handleToggleTaskStatus}
                      />
                  ))}
                </div>
              ) : (
                <Empty />
              )}

          </div>
        </section>
    </main>
  )
}

export default App