import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, Stethoscope, User, Palette, Shirt, 
  Image, Sparkles, BookOpen, CalendarDays, LogOut
} from "lucide-react";
import rnLogo from "@/assets/rn-logo.png";

const menuItems = [
  { title: "Início", url: "/cliente", icon: Home },
  { title: "Meu Diagnóstico", url: "/cliente/diagnostico", icon: Stethoscope },
  { title: "Meu Perfil de Estilo", url: "/cliente/perfil-estilo", icon: User },
  { title: "Minha Paleta de Cores", url: "/cliente/paleta", icon: Palette },
  { title: "Meu Guarda-Roupa", url: "/cliente/guarda-roupa", icon: Shirt },
  { title: "Meus Looks", url: "/cliente/looks", icon: Image },
  { title: "Inspirações", url: "/cliente/inspiracoes", icon: BookOpen },
  { title: "Planejamento de Looks", url: "/cliente/planejamento", icon: CalendarDays },
  { title: "Assistente de Estilo", url: "/cliente/assistente", icon: Sparkles },
];

export default function ClientSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border">
      <div className="p-6 flex flex-col items-center border-b border-sidebar-border">
        <img src={rnLogo} alt="RN Style" className="w-16 h-16 object-contain mb-2" />
        <span className="text-sm font-display tracking-[0.3em] text-sidebar-primary">
          RN STYLE
        </span>
        <span className="text-[10px] tracking-[0.2em] text-sidebar-foreground/60 uppercase mt-0.5">
          Estratégia de Imagem
        </span>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.url ||
            (item.url !== "/cliente" && location.pathname.startsWith(item.url));
          return (
            <NavLink
              key={item.url}
              to={item.url}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-body transition-all duration-200 ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          <span>Sair</span>
        </NavLink>
      </div>
    </aside>
  );
}
