function Navbar() {
  return (
    <nav className="bg-zinc-950 text-white px-8 py-5 flex justify-between items-center border-b border-zinc-800 sticky top-0 z-50">

      <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
        M-TRECE
      </h1>

      <ul className="flex gap-6 text-sm md:text-base">

        <li className="cursor-pointer hover:text-zinc-400 transition">
          Inicio
        </li>

        <li className="cursor-pointer hover:text-zinc-400 transition">
          Servicios
        </li>

        <li className="cursor-pointer hover:text-zinc-400 transition">
          Contacto
        </li>

      </ul>

    </nav>
  )
}

export default Navbar