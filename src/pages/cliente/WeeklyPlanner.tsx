import { motion } from "framer-motion";
import { CalendarDays, X } from "lucide-react";
import { useWardrobeContext } from "@/contexts/WardrobeContext";
import { DIAS_SEMANA } from "@/types/wardrobe";
import EmptyState from "@/components/EmptyState";

export default function WeeklyPlanner() {
  const { planejamento, looks, getPecaById, assignLookToDay } = useWardrobeContext();

  return (
    <div className="p-8 lg:p-12 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-light mb-1">Planejamento de Looks</h1>
        <p className="text-muted-foreground text-sm mb-10">Organize seus looks para a semana</p>
      </motion.div>

      {looks.length === 0 ? (
        <EmptyState title="Nenhum look criado ainda." subtitle="Crie looks para planejar sua semana." icon={<CalendarDays className="w-7 h-7 text-muted-foreground/40" />} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DIAS_SEMANA.map((dia, i) => {
            const plan = planejamento.find((p) => p.dia === dia);
            const look = plan?.lookId ? looks.find((l) => l.id === plan.lookId) : null;

            return (
              <motion.div key={dia} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="card-luxury p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg">{dia}</h3>
                  {look && (
                    <button onClick={() => assignLookToDay(dia, null)} className="p-1 rounded-lg hover:bg-muted transition-colors">
                      <X className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  )}
                </div>

                {look ? (
                  <div>
                    <p className="text-sm font-medium mb-1">{look.nome}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold-dark">{look.ocasiao}</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {look.pecas.map((pid) => {
                        const peca = getPecaById(pid);
                        return peca ? (
                          <span key={pid} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{peca.nome}</span>
                        ) : null;
                      })}
                    </div>
                  </div>
                ) : (
                  <div>
                    <select
                      value=""
                      onChange={(e) => assignLookToDay(dia, e.target.value || null)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs"
                    >
                      <option value="">Selecionar look...</option>
                      {looks.map((l) => (
                        <option key={l.id} value={l.id}>{l.nome} — {l.ocasiao}</option>
                      ))}
                    </select>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
