import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctor check',
      day: 'Jan 32th at 8am',
      reminder: true,
    },
    {
      id: 2,
      text: 'fact check',
      day: 'Feb 32th at 8am',
      reminder: true,
    },
    {
      id: 3,
      text: 'code check',
      day: 'Dev 32th at 8am',
      reminder: false,
    },
  ])

  // Add Tasks
  const addTask = task => {
    console.log(task);
  }

  // delete task
  const deleteTask = id => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = id => {
    // console.log(id)
    setTasks((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
  }

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : (
        'No Tasks Today'
      )}
    </div>
  )
}

export default App
