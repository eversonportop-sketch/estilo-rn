import { motion } from "framer-motion";

const estilos = [
  { nome: "Natural", icon: "🌿", descricao: "Conforto e praticidade com elegância despojada", tags: ["casual", "orgânico", "relaxado"] },
  { nome: "Clássico", icon: "👔", descricao: "Atemporal, refinado e convencional", tags: ["formal", "estruturado", "neutro"] },
  { nome: "Contemporâneo", icon: "⚡", descricao: "Moderno, atualizado e cosmopolita", tags: ["urbano", "minimalista", "clean"] },
  { nome: "Elegante", icon: "✨", descricao: "Luxuoso, refinado e sofisticado", tags: ["premium", "polido", "impecável"] },
  { nome: "Criativo", icon: "🎨", descricao: "Artístico, expressivo e original", tags: ["ousado", "colorido", "único"] },
  { nome: "Romântico", icon: "🌸", descricao: "Feminino, delicado e encantador", tags: ["floral", "suave", "gracioso"] },
  { nome: "Ponderado", icon: "🧘", descricao: "Equilibrado, harmonioso e sereno", tags: ["discreto", "sóbrio", "confiável"] },
];

export default function StyleProfiles() {
  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Perfis de Estilo</h1>
        <p className="text-muted-foreground text-sm mb-10">Biblioteca de personalidades de estilo</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estilos.map((estilo, i) => (
          <motion.div
            key={estilo.nome}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="card-luxury p-8 text-center hover:border-gold/30 transition-all cursor-pointer"
          >
            <div className="text-4xl mb-4">{estilo.icon}</div>
            <h3 className="font-display text-2xl mb-2">{estilo.nome}</h3>
            <p className="text-sm text-muted-foreground mb-4">{estilo.descricao}</p>
            <div className="flex gap-2 justify-center flex-wrap">
              {estilo.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
