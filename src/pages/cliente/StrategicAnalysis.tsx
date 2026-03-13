import { motion } from "framer-motion";
import { Target, FileText, Loader2 } from "lucide-react";
import { getActiveClientId } from "@/hooks/useActiveClient";
import { useClientStrategicAnalysis } from "@/hooks/useStrategicAnalysis";
import EmptyState from "@/components/EmptyState";

const allObjectives = [
  { label: "Autoridade", desc: "Transmitir poder e liderança" },
  { label: "Elegância", desc: "Sofisticação e refinamento" },
  { label: "Acessibilidade", desc: "Proximidade e empatia" },
  { label: "Credibilidade", desc: "Confiança e profissionalismo" },
  { label: "Modernidade", desc: "Atualidade e inovação" },
  { label: "Confiança", desc: "Segurança e certeza" },
  { label: "Sofisticação", desc: "Luxo e distinção" },
  { label: "Praticidade", desc: "Funcionalidade e objetividade" },
];

export default function ClientStrategicAnalysis() {
  const clientId = getActiveClientId();
  const { data: analysis, isLoading } = useClientStrategicAnalysis(clientId ?? undefined);

  if (isLoading) {
    return (
      <div className="p-8 flex items-center gap-2 text-muted-foreground">
        <Loader2 className="w-5 h-5 animate-spin" /> Carregando análise...
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="p-4 md:p-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6 text-gold" />
            <h1 className="text-2xl md:text-4xl font-display font-light">Minha Análise Estratégica</h1>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm mb-8 md:mb-10">
            Seu posicionamento estratégico de imagem definido pela sua estrategista
          </p>
        </motion.div>
        <EmptyState
          title="Análise ainda não realizada"
          subtitle="Sua estrategista ainda não registrou a análise estratégica. Aguarde a próxima etapa da consultoria."
          icon={<FileText className="w-7 h-7 text-muted-foreground/40" />}
        />
      </div>
    );
  }

  // Parse selected objectives from the objetivo_imagem field (comma-separated)
  const selectedObjectives = analysis.objetivo_imagem
    ? analysis.objetivo_imagem.split(",").map(s => s.trim()).filter(Boolean)
    : [];

  // Build info sections from real data
  const sections = [
    { label: "Pontos Fortes Visuais", value: analysis.pontos_fortes_visuais },
    { label: "Pontos de Atenção", value: analysis.pontos_atencao },
    { label: "Estratégia de Posicionamento", value: analysis.estrategia_posicionamento },
    { label: "Recomendações Gerais", value: analysis.recomendacoes_gerais },
    { label: "Observações Adicionais", value: analysis.observacoes_adicionais },
  ].filter(s => s.value);

  return (
    <div className="p-4 md:p-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-6 h-6 text-gold" />
          <h1 className="text-2xl md:text-4xl font-display font-light">Minha Análise Estratégica</h1>
        </div>
        <p className="text-muted-foreground text-xs md:text-sm mb-8 md:mb-10">
          Seu posicionamento estratégico de imagem definido pela sua estrategista
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Objectives grid */}
        {selectedObjectives.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-luxury p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-gold" />
              <h2 className="font-display text-lg md:text-xl">Objetivos de Imagem</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {allObjectives.map((obj, idx) => {
                const isSelected = selectedObjectives.some(
                  s => s.toLowerCase() === obj.label.toLowerCase()
                );
                return (
                  <motion.div
                    key={obj.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className={`p-3 md:p-4 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "border-gold/50 bg-gold/5"
                        : "border-border/50 opacity-50"
                    }`}
                  >
                    <p className="font-display text-sm md:text-base mb-1">{obj.label}</p>
                    <p className="text-[10px] text-muted-foreground">{obj.desc}</p>
                    {isSelected && (
                      <span className="inline-block mt-2 text-[9px] text-gold border border-gold/30 px-2 py-0.5 rounded-full">Selecionado</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Dynamic sections from real data */}
        {sections.map((section, idx) => (
          <motion.div key={section.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + idx * 0.08 }} className="card-luxury p-6 md:p-8">
            <h2 className="font-display text-lg md:text-xl mb-4">{section.label}</h2>
            <div className="card-luxury p-4 md:p-5 bg-muted/30">
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{section.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
