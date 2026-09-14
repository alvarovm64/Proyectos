import { useState } from "react"
import { supabase } from "../supabaseClient"

const serviciosDisponibles = [
  "Corte y peinar",
  "Corte de hombre",
  "Tinte y peinar",
  "Mechas y peinar",
  "Moldeador y peinar",
  "Recogidos",
  "Otro"
]

function ReservaForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: serviciosDisponibles[0],
    fecha: "",
    hora: ""
  })
  const [estado, setEstado] = useState("idle") // idle | enviando | ok | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado("enviando")

    const { error } = await supabase.from("citas").insert([
      {
        nombre: form.nombre,
        telefono: form.telefono,
        servicio: form.servicio,
        fecha: form.fecha,
        hora: form.hora,
        estado: "pendiente"
      }
    ])

    if (error) {
      console.error(error)
      setEstado("error")
    } else {
      setEstado("ok")
      setForm({ nombre: "", telefono: "", servicio: serviciosDisponibles[0], fecha: "", hora: "" })
    }
  }

  return (
    <section id="reservar" className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Reservar cita</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full rounded-lg px-4 py-3 bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-white"
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            required
            className="w-full rounded-lg px-4 py-3 bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-white"
          />

          <select
            name="servicio"
            value={form.servicio}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-3 bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-white"
          >
            {serviciosDisponibles.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <div className="flex gap-4">
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              required
              className="w-1/2 rounded-lg px-4 py-3 bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-white"
            />
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              required
              className="w-1/2 rounded-lg px-4 py-3 bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-zinc-300 transition disabled:opacity-50"
          >
            {estado === "enviando" ? "Enviando..." : "Confirmar reserva"}
          </button>

          {estado === "ok" && (
            <p className="text-green-400 text-center">¡Cita solicitada! Te contactaremos para confirmarla.</p>
          )}
          {estado === "error" && (
            <p className="text-red-400 text-center">Ha habido un error. Inténtalo de nuevo.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ReservaForm