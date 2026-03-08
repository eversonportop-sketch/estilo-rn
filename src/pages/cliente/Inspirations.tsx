import { motion } from "framer-motion";
import { Plus, Trash2, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";
import { useWardrobeContext } from "@/contexts/WardrobeContext";
import InspiracaoForm from "@/components/InspiracaoForm";
import LookForm from "@/components/LookForm";
import EmptyState from "@/components/EmptyState";
import type { Look } from "@/types/wardrobe";

const categorias = ["Todas", "Trabalho", "Reunião", "Casual", "Casual Sofisticado", "Evento", "Viagem", "Fim de Semana"];

export default function ClientInspirations() {
  const { inspiracoes, addInspiracao, deleteInspiracao, pecas, addLook } = useWardrobeContext();
  const [showForm, setShowForm] = useState(false);
  const [showLookForm, setShowLookForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filtered = activeFilter === "Todas" ? inspiracoes : inspiracoes.filter((i) => i.ocasiao === activeFilter);

  const handleSaveLook = (data: Omit<Look, "id">) => {
    addLook(data);
  };

  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-display font-light mb-1">Inspirações</h1>
          <p className="text-muted-foreground text-sm">Referências visuais selecionadas para seu perfil</p>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-primary-foreground text-sm">
          <Plus className="w-4 h-4" /> Salvar Inspiração
        </button>
      </motion.div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categorias.map((cat) => (
          <button key={cat} onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${activeFilter === cat ? "gold-gradient text-primary-foreground" : "border border-border hover:border-gold/40"}`}>
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="Nenhuma inspiração salva ainda." subtitle="Salve referências visuais para seu estilo." icon={<BookOpen className="w-7 h-7 text-muted-foreground/40" />} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((insp, i) => (
            <motion.div key={insp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="card-luxury overflow-hidden group">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center relative">
                <span className="text-3xl opacity-20">📷</span>
                <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => deleteInspiracao(insp.id)} className="p-2 rounded-lg bg-card/90 border border-border/50 hover:border-destructive/40 transition-colors text-destructive">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold-dark mb-2 inline-block">{insp.ocasiao}</span>
                <p className="text-xs text-muted-foreground mb-3">{insp.notaEstilo}</p>
                <button onClick={() => setShowLookForm(true)}
                  className="flex items-center gap-1.5 text-xs text-gold-dark hover:text-gold transition-colors">
                  <Sparkles className="w-3 h-3" /> Criar look a partir desta inspiração
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {showForm && <InspiracaoForm onSave={(data) => addInspiracao(data)} onClose={() => setShowForm(false)} />}
      {showLookForm && <LookForm onSave={handleSaveLook} onClose={() => setShowLookForm(false)} pecas={pecas} criadoPor="cliente" />}
    </div>
  );
}
