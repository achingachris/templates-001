import { useState } from 'react'

const Tasks = () => {
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
    }
  ])
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
