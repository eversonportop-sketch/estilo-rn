import { motion } from "framer-motion";
import { Search, Filter, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const allClients = [
  { id: 1, nome: "Marina Oliveira", email: "marina@email.com", estilo: "Clássico Elegante", paleta: "Inverno Profundo", progresso: 75, status: "ativo" },
  { id: 2, nome: "Carolina Santos", email: "carolina@email.com", estilo: "Contemporâneo", paleta: "Primavera Clara", progresso: 45, status: "ativo" },
  { id: 3, nome: "Beatriz Lima", email: "beatriz@email.com", estilo: "Romântico", paleta: "Verão Suave", progresso: 90, status: "concluído" },
  { id: 4, nome: "Ana Paula Costa", email: "ana@email.com", estilo: "Natural", paleta: "Outono Quente", progresso: 30, status: "ativo" },
  { id: 5, nome: "Juliana Ferreira", email: "juliana@email.com", estilo: "Criativo", paleta: "Primavera Clara", progresso: 60, status: "ativo" },
  { id: 6, nome: "Fernanda Alves", email: "fernanda@email.com", estilo: "Elegante", paleta: "Inverno Profundo", progresso: 100, status: "concluído" },
];

const statusFilters = ["Todos", "Ativo", "Concluído"];

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filtered = allClients.filter((c) => {
    const matchSearch = c.nome.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "Todos" || c.status === statusFilter.toLowerCase();
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-8 lg:p-12 max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-display font-light mb-1">Clientes</h1>
          <p className="text-muted-foreground text-sm">Gerencie suas clientes e consultorias</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-primary-foreground text-sm hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          Nova Cliente
        </button>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-gold/40"
          />
        </div>
        <div className="flex gap-2">
          {statusFilters.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2.5 rounded-lg text-sm transition-all ${
                statusFilter === s
                  ? "gold-gradient text-primary-foreground"
                  : "border border-border hover:border-gold/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((client, i) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="card-luxury p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-display text-lg">{client.nome}</h3>
                <p className="text-xs text-muted-foreground">{client.email}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                client.status === "concluído" ? "bg-green-100 text-green-700" : "bg-gold/10 text-gold-dark"
              }`}>
                {client.status === "concluído" ? "Concluído" : "Ativo"}
              </span>
            </div>

            <div className="text-sm space-y-1 mb-4">
              <p><span className="text-muted-foreground">Estilo:</span> {client.estilo}</p>
              <p><span className="text-muted-foreground">Paleta:</span> {client.paleta}</p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Progresso</span>
                <span className="text-gold-dark font-medium">{client.progresso}%</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full gold-gradient rounded-full" style={{ width: `${client.progresso}%` }} />
              </div>
            </div>

            <div className="flex gap-2">
              <Link to={`/estrategista/clientes/${client.id}`} className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg border border-border hover:border-gold/40 transition-colors">
                <Eye className="w-3 h-3" /> Ver
              </Link>
              <button className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg border border-border hover:border-gold/40 transition-colors">
                <Edit className="w-3 h-3" /> Editar
              </button>
              <button className="flex items-center gap-1 text-xs px-3 py-2 rounded-lg border border-border hover:border-destructive/40 text-destructive/70 hover:text-destructive transition-colors">
                <Trash2 className="w-3 h-3" /> Excluir
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
