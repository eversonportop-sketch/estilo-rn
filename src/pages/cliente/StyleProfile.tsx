import { motion } from "framer-motion";

export default function ClientStyleProfile() {
  return (
    <div className="p-8 lg:p-12 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Meu Perfil de Estilo</h1>
        <p className="text-muted-foreground text-sm mb-10">Sua identidade de estilo personalizada</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-luxury p-8">
          <span className="text-3xl mb-3 block">👔</span>
          <p className="text-xs text-gold-dark font-medium uppercase tracking-wider mb-1">Estilo Predominante</p>
          <h2 className="font-display text-2xl mb-2">Clássico Elegante</h2>
          <p className="text-sm text-muted-foreground">Atemporal, refinado e convencional. Transmite autoridade e sofisticação natural.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-luxury p-8">
          <span className="text-3xl mb-3 block">⚡</span>
          <p className="text-xs text-gold-dark/60 font-medium uppercase tracking-wider mb-1">Estilo Secundário</p>
          <h2 className="font-display text-2xl mb-2">Contemporâneo</h2>
          <p className="text-sm text-muted-foreground">Moderno, atualizado e cosmopolita. Traz frescor e atualidade ao visual.</p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-luxury p-8 mt-6">
        <h2 className="font-display text-xl mb-4">Elementos Recomendados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { label: "Linhas", value: "Retas, estruturadas" },
            { label: "Tecidos", value: "Seda, lã fria, algodão egípcio" },
            { label: "Caimento", value: "Justo, alfaiataria" },
            { label: "Acessórios", value: "Minimalistas, prata" },
            { label: "Formas", value: "Geométricas, definidas" },
            { label: "Acabamentos", value: "Impecáveis, detalhes discretos" },
            { label: "Contraste", value: "Alto, marcante" },
            { label: "Proporção", value: "Equilibrada, vertical" },
          ].map((el) => (
            <div key={el.label}>
              <p className="text-muted-foreground text-xs">{el.label}</p>
              <p className="font-medium">{el.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
