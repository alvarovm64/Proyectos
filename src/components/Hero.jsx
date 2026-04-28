function Hero() {
  return (
    <section className="h-screen bg-zinc-950 text-white flex items-center justify-center px-6">

      <div className="text-center max-w-3xl">

        <p className="uppercase tracking-[0.3em] text-zinc-400 mb-4">
          Peluquería y Estilo
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          M-TRECE
        </h1>

        <p className="text-zinc-300 text-lg md:text-xl mb-8">
          Estilo moderno, atención profesional y resultados que marcan la diferencia.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-300 transition">
          Reservar cita
        </button>

      </div>

    </section>
  )
}

export default Hero