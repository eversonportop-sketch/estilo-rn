import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
  "Objetivo de Imagem",
  "Cores de Essência",
  "Teste Revelador",
  "Personalidade de Estilo",
  "Elementos de Design",
  "Inspirações de Looks",
];

const objetivos = ["Autoridade", "Elegância", "Acessibilidade", "Credibilidade", "Modernidade", "Confiança", "Sofisticação", "Praticidade"];

const coresEssencia = [
  { nome: "Branco", hex: "#FFFFFF", significado: "Pureza, clareza, leveza" },
  { nome: "Preto", hex: "#000000", significado: "Poder, sofisticação, autoridade" },
  { nome: "Marinho", hex: "#1B2A4A", significado: "Confiança, profissionalismo" },
  { nome: "Bege", hex: "#D4C5A9", significado: "Elegância natural, suavidade" },
  { nome: "Violeta", hex: "#6B3FA0", significado: "Criatividade, luxo, espiritualidade" },
  { nome: "Rosa Claro", hex: "#F4C2C2", significado: "Feminilidade, delicadeza, romance" },
];

const testeSections = ["Metais", "Pedras", "Maquiagem", "Combinações de Cores", "Cabelos"];

const estilos = [
  { nome: "Natural", icon: "🌿", descricao: "Conforto e praticidade com elegância despojada", tags: ["casual", "orgânico", "relaxado"] },
  { nome: "Clássico", icon: "👔", descricao: "Atemporal, refinado e convencional", tags: ["formal", "estruturado", "neutro"] },
  { nome: "Contemporâneo", icon: "⚡", descricao: "Moderno, atualizado e cosmopolita", tags: ["urbano", "minimalista", "clean"] },
  { nome: "Elegante", icon: "✨", descricao: "Luxuoso, refinado e sofisticado", tags: ["premium", "polido", "impecável"] },
  { nome: "Criativo", icon: "🎨", descricao: "Artístico, expressivo e original", tags: ["ousado", "colorido", "único"] },
  { nome: "Romântico", icon: "🌸", descricao: "Feminino, delicado e encantador", tags: ["floral", "suave", "gracioso"] },
  { nome: "Ponderado", icon: "🧘", descricao: "Equilibrado, harmonioso e sereno", tags: ["discreto", "sóbrio", "confiável"] },
];

const elementosDesign = ["Linhas", "Formas", "Tecidos", "Caimento", "Acabamentos", "Acessórios", "Contraste", "Proporção Visual"];

const inspiracaoCategorias = ["Trabalho", "Reunião", "Casual Sofisticado", "Evento", "Viagem", "Fim de Semana"];

export default function DiagnosticPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedObjetivos, setSelectedObjetivos] = useState<string[]>([]);
  const [selectedCores, setSelectedCores] = useState<string[]>([]);
  const [estiloPredominante, setEstiloPredominante] = useState<string | null>(null);
  const [estiloSecundario, setEstiloSecundario] = useState<string | null>(null);

  const toggleObjetivo = (o: string) => {
    setSelectedObjetivos((prev) => prev.includes(o) ? prev.filter((x) => x !== o) : [...prev, o]);
  };

  const toggleCor = (c: string) => {
    setSelectedCores((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h2 className="font-display text-2xl mb-2">Objetivo de Imagem</h2>
            <p className="text-sm text-muted-foreground mb-6">Selecione os objetivos de imagem da cliente</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {objetivos.map((o) => (
                <button
                  key={o}
                  onClick={() => toggleObjetivo(o)}
                  className={`p-4 rounded-xl text-sm transition-all border ${
                    selectedObjetivos.includes(o)
                      ? "gold-gradient text-primary-foreground border-transparent"
                      : "border-border hover:border-gold/40 bg-card"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
            <textarea className="w-full p-3 rounded-lg border border-border bg-card text-sm resize-none focus:outline-none focus:ring-1 focus:ring-gold/40" rows={3} placeholder="Anotações sobre os objetivos..." />
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="font-display text-2xl mb-2">Cores de Essência</h2>
            <p className="text-sm text-muted-foreground mb-6">Selecione as cores que representam a cliente</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coresEssencia.map((cor) => (
                <button
                  key={cor.nome}
                  onClick={() => toggleCor(cor.nome)}
                  className={`card-luxury p-4 text-left transition-all ${selectedCores.includes(cor.nome) ? "ring-2 ring-gold" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full border border-border shrink-0" style={{ backgroundColor: cor.hex }} />
                    <span className="font-display text-base">{cor.nome}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{cor.significado}</p>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="font-display text-2xl mb-2">Teste Revelador</h2>
            <p className="text-sm text-muted-foreground mb-6">Referências visuais para análise</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testeSections.map((section) => (
                <div key={section} className="card-luxury p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="font-display text-base mb-1">{section}</h3>
                  <p className="text-xs text-muted-foreground">Referências visuais</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="font-display text-2xl mb-2">Personalidade de Estilo</h2>
            <p className="text-sm text-muted-foreground mb-6">Selecione o estilo predominante e secundário</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {estilos.map((estilo) => (
                <button
                  key={estilo.nome}
                  onClick={() => {
                    if (estiloPredominante === estilo.nome) {
                      setEstiloPredominante(null);
                    } else if (estiloSecundario === estilo.nome) {
                      setEstiloSecundario(null);
                    } else if (!estiloPredominante) {
                      setEstiloPredominante(estilo.nome);
                    } else if (!estiloSecundario) {
                      setEstiloSecundario(estilo.nome);
                    }
                  }}
                  className={`card-luxury p-5 text-left transition-all ${
                    estiloPredominante === estilo.nome ? "ring-2 ring-gold" : estiloSecundario === estilo.nome ? "ring-2 ring-gold/50" : ""
                  }`}
                >
                  <div className="text-2xl mb-2">{estilo.icon}</div>
                  <h3 className="font-display text-base mb-1">{estilo.nome}</h3>
                  {estiloPredominante === estilo.nome && <span className="text-[10px] text-gold-dark font-medium uppercase tracking-wider">Predominante</span>}
                  {estiloSecundario === estilo.nome && <span className="text-[10px] text-gold-dark/60 font-medium uppercase tracking-wider">Secundário</span>}
                  <p className="text-xs text-muted-foreground mt-1">{estilo.descricao}</p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {estilo.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="font-display text-2xl mb-2">Elementos de Design</h2>
            <p className="text-sm text-muted-foreground mb-6">Defina as recomendações visuais</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {elementosDesign.map((el) => (
                <div key={el} className="card-luxury p-5">
                  <h3 className="font-display text-base mb-2">{el}</h3>
                  <textarea className="w-full p-2 rounded-lg border border-border bg-background text-sm resize-none focus:outline-none focus:ring-1 focus:ring-gold/40" rows={2} placeholder={`Recomendações para ${el.toLowerCase()}...`} />
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="font-display text-2xl mb-2">Inspirações de Looks</h2>
            <p className="text-sm text-muted-foreground mb-6">Galeria de inspiração por categoria</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {inspiracaoCategorias.map((cat) => (
                <div key={cat} className="card-luxury p-6 text-center group cursor-pointer hover:border-gold/30 transition-all">
                  <div className="w-full aspect-[3/4] bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-3xl opacity-30 group-hover:opacity-50 transition-opacity">📷</span>
                  </div>
                  <h3 className="font-display text-base">{cat}</h3>
                  <p className="text-xs text-muted-foreground mt-1">Adicionar inspirações</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 lg:p-12 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Diagnóstico de Estilo</h1>
        <p className="text-muted-foreground text-sm mb-8">Sistema de diagnóstico em 6 etapas</p>
      </motion.div>

      {/* Step indicators */}
      <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <button
            key={step}
            onClick={() => setCurrentStep(i)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-all ${
              i === currentStep
                ? "gold-gradient text-primary-foreground"
                : i < currentStep
                ? "bg-gold/10 text-gold-dark"
                : "bg-muted text-muted-foreground"
            }`}
          >
            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0">
              {i < currentStep ? <Check className="w-3 h-3" /> : i + 1}
            </span>
            {step}
          </button>
        ))}
      </div>

      <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        {renderStep()}
      </motion.div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm disabled:opacity-30 hover:border-gold/40 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Anterior
        </button>
        <button
          onClick={() => setCurrentStep((p) => Math.min(steps.length - 1, p + 1))}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-primary-foreground text-sm disabled:opacity-30 hover:opacity-90 transition-opacity"
        >
          Próximo <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
