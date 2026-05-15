import { useState } from 'react'
import Layout from '../components/Layout'
import '../styles/Dashboard.css'

function Dashboard() {

  const [tasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      status: 'Em andamento'
    },

    {
      id: 2,
      title: 'Criar login Firebase',
      status: 'Pendente'
    },

    {
      id: 3,
      title: 'Finalizar dashboard',
      status: 'Concluído'
    }
  ])

  return (
    <Layout>

      <div className="top-bar">

        <h1 className="dashboard-title">
          Olá, Tiago 👋
        </h1>

        <button className="new-task-btn">
          + Nova tarefa
        </button>

      </div>

      <div className="cards">

        <div className="card">
          <h3>Tarefas</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Hoje</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Concluídas</h3>
          <p>8</p>
        </div>

      </div>

      <div className="tasks-container">

        {tasks.map(task => (
          <div className="task-item" key={task.id}>

            <div>
              <h4>{task.title}</h4>
              <span>{task.status}</span>
            </div>

            <span className="task-status">
              ✔
            </span>

          </div>
        ))}

      </div>

    </Layout>
  )
}

export default Dashboard