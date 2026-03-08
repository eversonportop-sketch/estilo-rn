import { motion } from "framer-motion";

const sections = [
  { titulo: "Objetivo de Imagem", conteudo: "Autoridade Profissional — Transmitir confiança e competência no ambiente corporativo, com sofisticação e presença." },
  { titulo: "Cores de Essência", conteudo: "Preto, Marinho, Branco e Bordô. Cores que reforçam a personalidade forte e determinada, com toques de feminilidade." },
  { titulo: "Teste Revelador", conteudo: "Metais prateados, pedras escuras (ônix, safira), maquiagem em tons neutros com delineado preciso." },
  { titulo: "Personalidade de Estilo", conteudo: "Estilo Predominante: Clássico Elegante. Estilo Secundário: Contemporâneo. Equilíbrio entre tradição e modernidade." },
  { titulo: "Elementos de Design", conteudo: "Linhas retas e estruturadas. Formas geométricas. Tecidos nobres como seda e lã fria. Caimento justo. Acabamentos impecáveis. Acessórios minimalistas em prata." },
];

export default function ClientDiagnostic() {
  return (
    <div className="p-8 lg:p-12 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Meu Diagnóstico</h1>
        <p className="text-muted-foreground text-sm mb-2">Relatório completo da sua análise de imagem</p>
        <div className="w-16 h-px gold-gradient mb-10" />
      </motion.div>

      <div className="space-y-8">
        {sections.map((section, i) => (
          <motion.div
            key={section.titulo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-luxury p-8"
          >
            <h2 className="font-display text-2xl mb-3 gold-text">{section.titulo}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{section.conteudo}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
