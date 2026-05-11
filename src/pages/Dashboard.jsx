import Layout from '../components/Layout'
import '../styles/Dashboard.css'

function Dashboard() {
  return (
    <Layout>

      <h1 className="dashboard-title">
        Olá, Tiago 👋
      </h1>

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

    </Layout>
  )
}

export default Dashboard