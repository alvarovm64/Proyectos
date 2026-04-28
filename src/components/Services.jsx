import { useState } from "react"
const services = [
  {
    categoria: "Mechas y retoques",
    imagen: "/mechas.webp",
    items: [
      { nombre: "Mechas completas y orear", precio: "55€" },
      { nombre: "Retoque de mechas y orear", precio: "45€" },
      { nombre: "Mechas y peinar", precio: "60€" },
      { nombre: "Retoque de mechas y peinar", precio: "48€" },
      { nombre: "Mechas, corte y peinar", precio: "75€" },
      { nombre: "Retoque de mechas (corte y peinar)", precio: "65€" },
      { nombre: "Mechas, matizador o B.C y peinar", precio: "72€" },
      { nombre: "Retoque matizador o B.C", precio: "60€" },
      { nombre: "Mechas, matizador o B.C, corte y peinar", precio: "85€" },
      { nombre: "Retoque completo", precio: "77€" }
    ]
  },

  {
    categoria: "Moldeador",
    imagen: "/moldeador.webp",
    items: [
      { nombre: "Moldeador y peinar", precio: "45€" },
      { nombre: "Moldeador, corte y peinar", precio: "53,50€" }
    ]
  },

  {
    categoria: "Recogidos",
    imagen: "/recogido.webp",
    items: [
      { nombre: "Semi-recogidos", precio: "25€" },
      { nombre: "Recogidos", precio: "35€" }
    ]
  },

  {
    categoria: "Tinte",
    imagen: "/tinte.webp",
    items: [
      { nombre: "Tinte de cejas", precio: "3€" },
      { nombre: "Tinte extra para puntas", precio: "8€" },
      { nombre: "Tinte y orear", precio: "24€" },
      { nombre: "Tinte y peinar", precio: "32€" },
      { nombre: "Tinte, corte y orear", precio: "36€" },
      { nombre: "Tinte, corte y peinar", precio: "44€" },
      { nombre: "Tinte, mechas y peinar", precio: "44€" },
      { nombre: "Tinte, mechas, corte y peinar", precio: "55€" }
    ]
  },

  {
    categoria: "Lavado",
    imagen: "/lavado.webp",
    items: [
      { nombre: "Lavar y orear", precio: "4€" },
      { nombre: "Lavar y peinar", precio: "12€" }
    ]
  },

  {
    categoria: "Corte",
    imagen: "/corte.jpg",
    items: [
      {
        nombre: "Repasos de corte (flequillos, patillas, cuello)",
        precio: "5€"
      },
      { nombre: "Corte y orear", precio: "18€" },
      { nombre: "Corte y peinar", precio: "25€" },
      { nombre: "Corte de hombre", precio: "12€" }
    ]
  },

  {
    categoria: "Otros servicios",
    imagen: "/otros.jpg",
    items: [
      { nombre: "Mascarilla de color", precio: "18€" },
      { nombre: "Decoloración global (40gr)", precio: "35€" },
      { nombre: "Decoloración global (80gr)", precio: "45€" },
      { nombre: "Aplicación de tinte externo y peinar", precio: "22€" },
      { nombre: "Aplicación de tinte externo, corte y peinar", precio: "32€" },
      { nombre: "Trenzas boxeadoras desde", precio: "15€" },
      { nombre: "Alisado de Keratina Francés Valquer", precio: "95€" },
      { nombre: "Rapado, rasurado de barba y brazos", precio: "15€" },
      { nombre: "Teñir sin lavar", precio: "18€" },
      { nombre: "Aplicación de Henna y lavado", precio: "10€" }
    ]
  }
]

function Services() {
    const [categoriaActiva, setCategoriaActiva] = useState(null)
  return (
  <section className="bg-zinc-50 min-h-screen">

    <div className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-12">
        Servicios
      </h2>

      {/* VISTA 1: GRID */}
      {!categoriaActiva && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((categoria, index) => (
            <div
              key={index}
              onClick={() => setCategoriaActiva(categoria)}
              className="cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >

              <img
                src={categoria.imagen}
                className="w-full h-96 object-cover object-top rounded-3xl"
                />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  {categoria.categoria}
                </h3>
              </div>

            </div>
          ))}

        </div>
      )}

      {/* VISTA 2: DETALLE */}
      {categoriaActiva && (
        <div>

          {/* BOTÓN VOLVER */}
          <button
            onClick={() => setCategoriaActiva(null)}
            className="mb-8 text-sm bg-black text-white px-4 py-2 rounded-full"
          >
            ← Volver
          </button>

          {/* BANNER */}
          <div className="rounded-3xl overflow-hidden mb-10">
            <img
              src={categoriaActiva.imagen}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* TÍTULO */}
          <h3 className="text-3xl font-bold mb-8">
            {categoriaActiva.categoria}
          </h3>

          {/* LISTA */}
          <div className="space-y-4">

            {categoriaActiva.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-zinc-300 py-3"
              >
                <span>{item.nombre}</span>
                <span className="font-semibold">{item.precio}</span>
              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  </section>
)
}

export default Services