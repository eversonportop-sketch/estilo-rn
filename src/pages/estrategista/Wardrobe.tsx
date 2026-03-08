import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const categorias = ["Todas", "Blusas", "Calças", "Vestidos", "Sapatos", "Acessórios", "Terceiras Peças"];

const pecas = [
  { id: 1, nome: "Blazer Alfaiataria", categoria: "Terceiras Peças", cor: "Preto", obs: "Peça-chave para reuniões. Corte estruturado." },
  { id: 2, nome: "Camisa Seda", categoria: "Blusas", cor: "Off-white", obs: "Versátil. Combina com paleta Inverno Profundo." },
  { id: 3, nome: "Calça Reta", categoria: "Calças", cor: "Marinho", obs: "Corte clássico, cintura alta. Base do guarda-roupa." },
  { id: 4, nome: "Vestido Midi", categoria: "Vestidos", cor: "Bordô", obs: "Para eventos e jantares. Tom impactante." },
  { id: 5, nome: "Scarpin", categoria: "Sapatos", cor: "Nude", obs: "Alongamento visual. Combina com tudo." },
  { id: 6, nome: "Bolsa Estruturada", categoria: "Acessórios", cor: "Preto", obs: "Tamanho médio, alça de corrente prateada." },
];

export default function WardrobePage() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filtered = activeCategory === "Todas" ? pecas : pecas.filter((p) => p.categoria === activeCategory);

  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-display font-light mb-1">Guarda-Roupa Digital</h1>
          <p className="text-muted-foreground text-sm">Gerencie as peças do guarda-roupa</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-primary-foreground text-sm">
          <Plus className="w-4 h-4" /> Adicionar Peça
        </button>
      </motion.div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              activeCategory === cat ? "gold-gradient text-primary-foreground" : "border border-border hover:border-gold/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((peca, i) => (
          <motion.div
            key={peca.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card-luxury overflow-hidden"
          >
            <div className="aspect-square bg-muted flex items-center justify-center">
              <span className="text-4xl opacity-20">👗</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg mb-1">{peca.nome}</h3>
              <div className="flex gap-2 text-xs text-muted-foreground mb-2">
                <span className="px-2 py-0.5 rounded-full bg-muted">{peca.categoria}</span>
                <span className="px-2 py-0.5 rounded-full bg-muted">{peca.cor}</span>
              </div>
              <p className="text-xs text-muted-foreground">{peca.obs}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
