import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Filter, Upload, Sparkles } from "lucide-react";
import { useState } from "react";
import { useWardrobeContext } from "@/contexts/WardrobeContext";
import { FILTRO_CATEGORIAS, OCASIOES, CORES_COMUNS } from "@/types/wardrobe";
import type { PecaGuardaRoupa } from "@/types/wardrobe";
import PecaForm from "@/components/PecaForm";
import SmartDetectionModal from "@/components/SmartDetectionModal";
import EmptyState from "@/components/EmptyState";

const ORIGEM_OPTIONS = ["Todas", "Estrategista", "Cliente"] as const;

export default function WardrobePage() {
  const { pecas, addPeca, addMultiplePecas, updatePeca, deletePeca } = useWardrobeContext();
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [activeCor, setActiveCor] = useState("Todas");
  const [activeOcasiao, setActiveOcasiao] = useState("Todas");
  const [activeOrigem, setActiveOrigem] = useState<string>("Todas");
  const [showForm, setShowForm] = useState(false);
  const [editingPeca, setEditingPeca] = useState<PecaGuardaRoupa | undefined>();
  const [showFilters, setShowFilters] = useState(false);
  const [showDetection, setShowDetection] = useState(false);
  const [showMultiImport, setShowMultiImport] = useState(false);

  let filtered = pecas;
  if (activeCategory !== "Todas") filtered = filtered.filter((p) => p.categoria === activeCategory);
  if (activeCor !== "Todas") filtered = filtered.filter((p) => p.cor === activeCor);
  if (activeOcasiao !== "Todas") filtered = filtered.filter((p) => p.ocasiao === activeOcasiao);
  if (activeOrigem !== "Todas") filtered = filtered.filter((p) => p.criadoPor === activeOrigem.toLowerCase());

  const handleEdit = (peca: PecaGuardaRoupa) => { setEditingPeca(peca); setShowForm(true); };

  const handleSave = (data: Omit<PecaGuardaRoupa, "id">) => {
    if (editingPeca) updatePeca(editingPeca.id, data);
    else addPeca(data);
    setEditingPeca(undefined);
  };

  const handleSmartSave = (items: Omit<PecaGuardaRoupa, "id">[]) => { addMultiplePecas(items); };

  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-display font-light mb-1">Guarda-Roupa Digital</h1>
          <p className="text-muted-foreground text-sm">Gerencie as peças do guarda-roupa da cliente</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowMultiImport(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-gold/40 text-sm transition-colors">
            <Upload className="w-4 h-4" /> Importar por Foto
          </button>
          <button onClick={() => setShowDetection(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-gold/40 text-sm transition-colors">
            <Sparkles className="w-4 h-4" /> Detecção Inteligente
          </button>
          <button onClick={() => { setEditingPeca(undefined); setShowForm(true); }} className="flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-primary-foreground text-sm">
            <Plus className="w-4 h-4" /> Adicionar Peça
          </button>
        </div>
      </motion.div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {FILTRO_CATEGORIAS.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${activeCategory === cat ? "gold-gradient text-primary-foreground" : "border border-border hover:border-gold/40"}`}>
            {cat}
          </button>
        ))}
      </div>

      <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4">
        <Filter className="w-3.5 h-3.5" /> {showFilters ? "Ocultar filtros" : "Mais filtros"}
      </button>

      {showFilters && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl bg-muted/30 border border-border/50">
          <div>
            <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Cor</label>
            <select value={activeCor} onChange={(e) => setActiveCor(e.target.value)} className="px-3 py-1.5 rounded-lg border border-border bg-background text-xs">
              <option value="Todas">Todas</option>
              {CORES_COMUNS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Ocasião</label>
            <select value={activeOcasiao} onChange={(e) => setActiveOcasiao(e.target.value)} className="px-3 py-1.5 rounded-lg border border-border bg-background text-xs">
              <option value="Todas">Todas</option>
              {OCASIOES.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">Origem</label>
            <select value={activeOrigem} onChange={(e) => setActiveOrigem(e.target.value)} className="px-3 py-1.5 rounded-lg border border-border bg-background text-xs">
              {ORIGEM_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <EmptyState title="Nenhuma peça cadastrada ainda." subtitle="Adicione uma peça para começar." />
        ) : (
          filtered.map((peca, i) => (
            <motion.div key={peca.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="card-luxury overflow-hidden group">
              <div className="aspect-square bg-muted flex items-center justify-center relative">
                {peca.foto ? (
                  <img src={peca.foto} alt={peca.nome} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl opacity-20">👗</span>
                )}
                <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => handleEdit(peca)} className="p-2 rounded-lg bg-card/90 border border-border/50 hover:border-gold/40 transition-colors">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => deletePeca(peca.id)} className="p-2 rounded-lg bg-card/90 border border-border/50 hover:border-destructive/40 transition-colors text-destructive">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg mb-1">{peca.nome}</h3>
                <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-muted">{peca.categoria}</span>
                  <span className="px-2 py-0.5 rounded-full bg-muted">{peca.cor}</span>
                  <span className="px-2 py-0.5 rounded-full bg-muted">{peca.ocasiao}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{peca.observacao}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${peca.criadoPor === "estrategista" ? "bg-gold/10 text-gold-dark" : "bg-muted text-muted-foreground"}`}>
                  {peca.criadoPor === "estrategista" ? "Adicionado pela estrategista" : "Adicionado pela cliente"}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {showForm && (
        <PecaForm onSave={handleSave} onClose={() => { setShowForm(false); setEditingPeca(undefined); }} initial={editingPeca} criadoPor="estrategista" />
      )}
      {showDetection && (
        <SmartDetectionModal onSave={handleSmartSave} onClose={() => setShowDetection(false)} criadoPor="estrategista" />
      )}
      {showMultiImport && (
        <SmartDetectionModal onSave={handleSmartSave} onClose={() => setShowMultiImport(false)} criadoPor="estrategista" multiItem />
      )}
    </div>
  );
}
