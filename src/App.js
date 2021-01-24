import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  // delete task
  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App
