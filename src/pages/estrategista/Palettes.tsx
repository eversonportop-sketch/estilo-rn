import { motion } from "framer-motion";

const paletas = [
  {
    nome: "Inverno Profundo",
    descricao: "Cores intensas, contrastantes e vibrantes. Tons frios e profundos.",
    cores: [
      { hex: "#0D0D0D", nome: "Preto Profundo" },
      { hex: "#1B2A4A", nome: "Marinho Intenso" },
      { hex: "#8B0000", nome: "Bordô" },
      { hex: "#2D5A27", nome: "Verde Floresta" },
      { hex: "#4A0E4E", nome: "Roxo Escuro" },
      { hex: "#C0C0C0", nome: "Prata" },
    ],
    dicas: "Ideal para looks de alto impacto. Use com acessórios prateados.",
    metais: "Prata, Ródio, Ouro Branco",
  },
  {
    nome: "Verão Suave",
    descricao: "Tons suaves, pastel e acinzentados. Delicadeza e sofisticação.",
    cores: [
      { hex: "#B0C4DE", nome: "Azul Claro" },
      { hex: "#D8BFD8", nome: "Lilás Suave" },
      { hex: "#C4AEAD", nome: "Rosa Antigo" },
      { hex: "#A8C3B0", nome: "Verde Sálvia" },
      { hex: "#E6D5C3", nome: "Bege Rosado" },
      { hex: "#8896AB", nome: "Azul Acinzentado" },
    ],
    dicas: "Perfeita para tons suaves e elegantes. Evite cores muito vibrantes.",
    metais: "Prata, Ouro Rosé",
  },
  {
    nome: "Outono Quente",
    descricao: "Tons terrosos, quentes e naturais. Riqueza e profundidade.",
    cores: [
      { hex: "#8B4513", nome: "Marrom Chocolate" },
      { hex: "#CC7722", nome: "Âmbar" },
      { hex: "#556B2F", nome: "Verde Oliva" },
      { hex: "#B8860B", nome: "Dourado Escuro" },
      { hex: "#CD853F", nome: "Caramelo" },
      { hex: "#A0522D", nome: "Terracota" },
    ],
    dicas: "Use tons terrosos como base. Combine com acessórios dourados.",
    metais: "Ouro Amarelo, Bronze, Cobre",
  },
  {
    nome: "Primavera Clara",
    descricao: "Cores claras, quentes e luminosas. Frescor e vitalidade.",
    cores: [
      { hex: "#FFD700", nome: "Amarelo Ouro" },
      { hex: "#FF6B6B", nome: "Coral" },
      { hex: "#87CEEB", nome: "Azul Céu" },
      { hex: "#98FB98", nome: "Verde Menta" },
      { hex: "#FFB6C1", nome: "Rosa Bebê" },
      { hex: "#FFFACD", nome: "Creme Limão" },
    ],
    dicas: "Aposte em tons luminosos e quentes. Evite cores muito pesadas.",
    metais: "Ouro Amarelo Claro, Ouro Rosé",
  },
];

export default function PalettesPage() {
  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Paletas de Cores</h1>
        <p className="text-muted-foreground text-sm mb-10">Biblioteca de paletas sazonais</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {paletas.map((paleta, i) => (
          <motion.div
            key={paleta.nome}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-luxury p-8"
          >
            <h3 className="font-display text-2xl mb-1">{paleta.nome}</h3>
            <p className="text-sm text-muted-foreground mb-6">{paleta.descricao}</p>

            <div className="flex gap-3 mb-6">
              {paleta.cores.map((cor) => (
                <div key={cor.hex} className="text-center">
                  <div className="w-12 h-12 rounded-lg border border-border/50 shadow-sm mb-1" style={{ backgroundColor: cor.hex }} />
                  <p className="text-[9px] text-muted-foreground">{cor.hex}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <p><span className="text-muted-foreground">Dicas:</span> {paleta.dicas}</p>
              <p><span className="text-muted-foreground">Metais:</span> {paleta.metais}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
