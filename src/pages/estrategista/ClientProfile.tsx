import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Briefcase, Target, Palette, Star } from "lucide-react";

const clientData = {
  id: 1,
  nome: "Marina Oliveira",
  email: "marina@email.com",
  telefone: "(11) 99999-0000",
  profissao: "Advogada Empresarial",
  objetivo: "Autoridade Profissional",
  estiloPredominante: "Clássico Elegante",
  estiloSecundario: "Contemporâneo",
  paleta: "Inverno Profundo",
  progresso: 75,
  anotacoes: "Cliente busca transmitir autoridade e sofisticação no ambiente corporativo. Prefere tons neutros e cortes estruturados.",
};

const timeline = [
  { data: "15 Jan 2026", titulo: "Diagnóstico iniciado", descricao: "Primeira sessão de análise de estilo e objetivos de imagem." },
  { data: "22 Jan 2026", titulo: "Paleta definida", descricao: "Paleta Inverno Profundo selecionada com base na análise de coloração." },
  { data: "05 Fev 2026", titulo: "Guarda-roupa analisado", descricao: "Análise completa do guarda-roupa com 45 peças catalogadas." },
  { data: "28 Fev 2026", titulo: "Looks enviados", descricao: "12 looks estratégicos enviados para diferentes ocasiões." },
];

const journeySteps = [
  { nome: "Diagnóstico", concluido: true },
  { nome: "Perfil de Estilo", concluido: true },
  { nome: "Paleta de Cores", concluido: true },
  { nome: "Guarda-Roupa", concluido: true },
  { nome: "Looks Recomendados", concluido: false },
];

export default function ClientProfile() {
  return (
    <div className="p-8 lg:p-12 max-w-5xl">
      <Link to="/estrategista/clientes" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Voltar para Clientes
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">{clientData.nome}</h1>
        <p className="text-muted-foreground text-sm mb-10">Ficha completa da cliente</p>
      </motion.div>

      {/* Journey Progress */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-luxury p-6 mb-8">
        <h2 className="font-display text-xl mb-4">Jornada da Consultoria</h2>
        <div className="flex items-center gap-2">
          {journeySteps.map((step, i) => (
            <div key={step.nome} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${
                step.concluido ? "gold-gradient text-primary-foreground" : "border-2 border-border text-muted-foreground"
              }`}>
                {i + 1}
              </div>
              <span className={`text-xs ${step.concluido ? "text-foreground" : "text-muted-foreground"}`}>{step.nome}</span>
              {i < journeySteps.length - 1 && (
                <div className={`flex-1 h-px ${step.concluido ? "bg-gold" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Client Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-luxury p-6">
          <h2 className="font-display text-xl mb-4">Informações Pessoais</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-gold" />
              <span>{clientData.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-gold" />
              <span>{clientData.telefone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Briefcase className="w-4 h-4 text-gold" />
              <span>{clientData.profissao}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Target className="w-4 h-4 text-gold" />
              <span>{clientData.objetivo}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Star className="w-4 h-4 text-gold" />
              <span>{clientData.estiloPredominante} / {clientData.estiloSecundario}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Palette className="w-4 h-4 text-gold" />
              <span>{clientData.paleta}</span>
            </div>
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-luxury p-6">
          <h2 className="font-display text-xl mb-4">Anotações da Estrategista</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{clientData.anotacoes}</p>
          <textarea
            className="w-full mt-4 p-3 rounded-lg border border-border bg-background text-sm resize-none focus:outline-none focus:ring-1 focus:ring-gold/40"
            rows={3}
            placeholder="Adicionar nova anotação..."
          />
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-luxury p-6">
        <h2 className="font-display text-xl mb-6">Timeline da Consultoria</h2>
        <div className="space-y-6">
          {timeline.map((entry, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full gold-gradient shrink-0" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold/30 mt-1" />}
              </div>
              <div className="pb-4">
                <p className="text-xs text-gold-dark font-medium">{entry.data}</p>
                <p className="font-display text-base mt-0.5">{entry.titulo}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{entry.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
