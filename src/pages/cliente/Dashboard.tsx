import { motion } from "framer-motion";
import { Palette, Star, Target, Eye, Sparkles } from "lucide-react";
import { useWardrobeContext } from "@/contexts/WardrobeContext";
import EmptyState from "@/components/EmptyState";

export default function ClientDashboard() {
  const { looks, getPecaById } = useWardrobeContext();
  const looksRecomendados = looks.filter((l) => l.criadoPor === "estrategista");

  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Bem-vinda, Marina</h1>
        <p className="text-muted-foreground text-sm mb-10">Sua estratégia de imagem personalizada</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Estilo Predominante", value: "Clássico Elegante", icon: Star },
          { label: "Estilo Secundário", value: "Contemporâneo", icon: Eye },
          { label: "Paleta de Cores", value: "Inverno Profundo", icon: Palette },
          { label: "Objetivo de Imagem", value: "Autoridade", icon: Target },
        ].map((card, i) => (
          <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="card-luxury p-6">
            <card.icon className="w-5 h-5 text-gold mb-3" />
            <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
            <p className="font-display text-lg">{card.value}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-display font-light mb-6">Looks Recomendados para Você</h2>

      {looksRecomendados.length === 0 ? (
        <EmptyState title="Nenhum look recomendado ainda." subtitle="Sua estrategista ainda não criou looks para você." icon={<Sparkles className="w-7 h-7 text-muted-foreground/40" />} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {looksRecomendados.map((look, i) => (
            <motion.div key={look.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="card-luxury overflow-hidden">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <span className="text-4xl opacity-20">✨</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg mb-1">{look.nome}</h3>
                <span className="text-xs text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full">{look.ocasiao}</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {look.pecas.map((pid) => {
                    const peca = getPecaById(pid);
                    return peca ? (
                      <span key={pid} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{peca.nome}</span>
                    ) : null;
                  })}
                </div>
                {look.observacao && <p className="text-xs text-muted-foreground mt-2">{look.observacao}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
