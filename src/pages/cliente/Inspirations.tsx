import { motion } from "framer-motion";

const categorias = ["Trabalho", "Reunião", "Casual Sofisticado", "Evento", "Viagem", "Fim de Semana"];

export default function ClientInspirations() {
  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Inspirações</h1>
        <p className="text-muted-foreground text-sm mb-10">Referências visuais selecionadas para seu perfil</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categorias.map((cat, i) => (
          <motion.div key={cat} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="card-luxury overflow-hidden group cursor-pointer hover:border-gold/30 transition-all">
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              <span className="text-3xl opacity-20 group-hover:opacity-40 transition-opacity">📷</span>
            </div>
            <div className="p-5 text-center">
              <h3 className="font-display text-lg">{cat}</h3>
              <p className="text-xs text-muted-foreground mt-1">Explorar inspirações</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
