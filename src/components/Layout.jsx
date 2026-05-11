import '../styles/Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">

      <aside className="sidebar">
        <h1 className="logo">TaskFlow</h1>

        <nav className="menu">
          <span>📋 Tarefas</span>
          <span>📅 Hoje</span>
          <span>✅ Concluídas</span>
        </nav>
      </aside>

      <main className="main-content">
        {children}
      </main>

    </div>
  )
}

export default Layout