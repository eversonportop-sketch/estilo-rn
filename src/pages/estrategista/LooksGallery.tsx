import { motion } from "framer-motion";

const looks = [
  { id: 1, nome: "Power Meeting", ocasiao: "Reunião", pecas: ["Blazer Alfaiataria", "Camisa Seda", "Calça Reta", "Scarpin"], nota: "Look de autoridade para reuniões importantes." },
  { id: 2, nome: "Casual Friday", ocasiao: "Trabalho Casual", pecas: ["Camisa Seda", "Calça Reta", "Bolsa Estruturada"], nota: "Elegante sem ser formal." },
  { id: 3, nome: "Gala Night", ocasiao: "Evento", pecas: ["Vestido Midi", "Scarpin", "Bolsa Estruturada"], nota: "Impactante para eventos noturnos." },
];

export default function LooksGallery() {
  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Galeria de Looks</h1>
        <p className="text-muted-foreground text-sm mb-10">Looks montados para suas clientes</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {looks.map((look, i) => (
          <motion.div
            key={look.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-luxury overflow-hidden"
          >
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              <span className="text-5xl opacity-20">✨</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-xl">{look.nome}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold-dark">{look.ocasiao}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {look.pecas.map((p) => (
                  <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{p}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{look.nota}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
