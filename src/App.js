import React from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from './components/Addtask';
import { useState } from 'react'
function App() {
    const [showAddTask,setShowAddTask]=useState(false);
    const [tasks,setTasks]=useState([{
            id:1,
            text:'water filling',
            day:'08/07/2021',
            reminder:true
        },
        {
            id:2,
            text:'car wash',
            day:'09/07/2021',
            reminder:true
        },
        {
            id:3,
            text:'grocery',
            day:'10/07/2021',
            reminder:false
        }])

      const DeleteTask=(id)=>{
        setTasks(tasks.filter((task)=>task.id !== id))
      }  

      const toggleReminder=(id)=>{
        setTasks(tasks.map((task)=>task.id===id?{
            ...task,reminder:!task.reminder
        }:task))
      }

      const addTask=(task)=>{
        const id=Math.floor(Math.random()*1000)+1;
        const newTask={id,...task};
        setTasks([...tasks,newTask]);
      }
  
  return (
    <div className="container">
      <Header onAdd={()=>{setShowAddTask(!showAddTask)}} showAddTask={showAddTask}/>
      {showAddTask && <Addtask onAdd={addTask}/>}
      {
      tasks.length!==0?(
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder} />
     ):("No Task Found")
     }
    
    </div>
    
  );
}

export default App;
