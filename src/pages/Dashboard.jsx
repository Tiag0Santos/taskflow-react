import { useState } from 'react'
import Layout from '../components/Layout'

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

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold text-slate-800">
          Olá, Tiago 👋
        </h1>

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            transition
            font-medium
            shadow-md
          "
        >
          + Nova tarefa
        </button>

      </div>

      <div className="flex gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow-md w-56">
          <h3 className="text-slate-500 text-lg mb-2">
            Tarefas
          </h3>

          <p className="text-4xl font-bold text-slate-800">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md w-56">
          <h3 className="text-slate-500 text-lg mb-2">
            Hoje
          </h3>

          <p className="text-4xl font-bold text-slate-800">
            5
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md w-56">
          <h3 className="text-slate-500 text-lg mb-2">
            Concluídas
          </h3>

          <p className="text-4xl font-bold text-slate-800">
            8
          </p>
        </div>

      </div>

      <div className="space-y-5">

        {tasks.map(task => (

          <div
            key={task.id}
            className="
              bg-white
              p-5
              rounded-2xl
              shadow-md
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h4 className="text-xl font-semibold text-slate-800 mb-1">
                {task.title}
              </h4>

              <span className="text-slate-500">
                {task.status}
              </span>

            </div>

            <span className="text-green-600 text-2xl">
              ✔
            </span>

          </div>

        ))}

      </div>

    </Layout>
  )
}

export default Dashboard