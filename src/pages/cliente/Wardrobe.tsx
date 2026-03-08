import { motion } from "framer-motion";
import { useState } from "react";

const categorias = ["Todas", "Blusas", "Calças", "Vestidos", "Sapatos", "Acessórios", "Terceiras Peças"];
const pecas = [
  { id: 1, nome: "Blazer Alfaiataria", categoria: "Terceiras Peças", cor: "Preto", obs: "Peça-chave para reuniões." },
  { id: 2, nome: "Camisa Seda", categoria: "Blusas", cor: "Off-white", obs: "Versátil e elegante." },
  { id: 3, nome: "Calça Reta", categoria: "Calças", cor: "Marinho", obs: "Base do guarda-roupa." },
  { id: 4, nome: "Vestido Midi", categoria: "Vestidos", cor: "Bordô", obs: "Para eventos." },
  { id: 5, nome: "Scarpin", categoria: "Sapatos", cor: "Nude", obs: "Alongamento visual." },
  { id: 6, nome: "Bolsa Estruturada", categoria: "Acessórios", cor: "Preto", obs: "Alça de corrente prateada." },
];

export default function ClientWardrobe() {
  const [cat, setCat] = useState("Todas");
  const filtered = cat === "Todas" ? pecas : pecas.filter((p) => p.categoria === cat);

  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Meu Guarda-Roupa</h1>
        <p className="text-muted-foreground text-sm mb-8">Suas peças catalogadas pela estrategista</p>
      </motion.div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categorias.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${cat === c ? "gold-gradient text-primary-foreground" : "border border-border hover:border-gold/40"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((peca, i) => (
          <motion.div key={peca.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card-luxury overflow-hidden">
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
