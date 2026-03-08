import { motion } from "framer-motion";

const paleta = {
  nome: "Inverno Profundo",
  descricao: "Cores intensas, contrastantes e vibrantes. Tons frios e profundos que transmitem autoridade e sofisticação.",
  cores: [
    { hex: "#0D0D0D", nome: "Preto Profundo" },
    { hex: "#1B2A4A", nome: "Marinho Intenso" },
    { hex: "#8B0000", nome: "Bordô" },
    { hex: "#2D5A27", nome: "Verde Floresta" },
    { hex: "#4A0E4E", nome: "Roxo Escuro" },
    { hex: "#C0C0C0", nome: "Prata" },
  ],
  dicas: "Use essas cores como base do seu guarda-roupa. Preto e Marinho são suas cores-âncora. Bordô é seu tom de destaque. Combine com acessórios prateados para um visual coeso.",
  metais: "Prata, Ródio, Ouro Branco",
};

export default function ClientPalette() {
  return (
    <div className="p-8 lg:p-12 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Minha Paleta de Cores</h1>
        <p className="text-muted-foreground text-sm mb-10">Suas cores ideais baseadas na análise de coloração</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-luxury p-8 mb-6">
        <h2 className="font-display text-3xl gold-text mb-2">{paleta.nome}</h2>
        <p className="text-sm text-muted-foreground mb-8">{paleta.descricao}</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
          {paleta.cores.map((cor) => (
            <div key={cor.hex} className="text-center">
              <div className="aspect-square rounded-xl border border-border/50 shadow-sm mb-2" style={{ backgroundColor: cor.hex }} />
              <p className="text-xs font-medium">{cor.nome}</p>
              <p className="text-[10px] text-muted-foreground">{cor.hex}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-sm">
          <div className="card-luxury p-4 bg-muted/30">
            <p className="text-xs text-gold-dark font-medium uppercase tracking-wider mb-1">Dicas de Uso</p>
            <p className="text-muted-foreground">{paleta.dicas}</p>
          </div>
          <div className="card-luxury p-4 bg-muted/30">
            <p className="text-xs text-gold-dark font-medium uppercase tracking-wider mb-1">Metais Recomendados</p>
            <p className="text-muted-foreground">{paleta.metais}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
