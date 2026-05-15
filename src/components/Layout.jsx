function Layout({ children }) {
  return (
    <div className="flex min-h-screen">

      <aside className="w-72 bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-12">TaskFlow</h1>

        <nav className="flex flex-col gap-8 text-xl">
          <a href="">📋 Tarefas</a>
          <a href="">📅 Hoje</a>
          <a href="">✅ Concluídas</a>
        </nav>
      </aside>

      <main className="flex-1 bg-slate-100 p-10">
        {children}
      </main>

    </div>
  )
}

export default Layout