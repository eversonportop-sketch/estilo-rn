import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WardrobeProvider } from "@/contexts/WardrobeContext";
import NotFound from "./pages/NotFound";

// Layouts
import StrategistLayout from "./layouts/StrategistLayout";
import ClientLayout from "./layouts/ClientLayout";

// Login
import LoginPage from "./pages/Login";

// Strategist pages
import StrategistDashboard from "./pages/estrategista/Dashboard";
import ClientsPage from "./pages/estrategista/Clients";
import ClientProfile from "./pages/estrategista/ClientProfile";
import DiagnosticPage from "./pages/estrategista/Diagnostic";
import StyleProfiles from "./pages/estrategista/StyleProfiles";
import PalettesPage from "./pages/estrategista/Palettes";
import WardrobePage from "./pages/estrategista/Wardrobe";
import LooksGallery from "./pages/estrategista/LooksGallery";
import StyleAssistant from "./pages/estrategista/StyleAssistant";

// Client pages
import ClientDashboard from "./pages/cliente/Dashboard";
import ClientDiagnostic from "./pages/cliente/Diagnostic";
import ClientStyleProfile from "./pages/cliente/StyleProfile";
import ClientPalette from "./pages/cliente/Palette";
import ClientWardrobe from "./pages/cliente/Wardrobe";
import ClientLooks from "./pages/cliente/Looks";
import ClientInspirations from "./pages/cliente/Inspirations";
import ClientAssistant from "./pages/cliente/Assistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          {/* Strategist Portal */}
          <Route path="/estrategista" element={<StrategistLayout />}>
            <Route index element={<StrategistDashboard />} />
            <Route path="clientes" element={<ClientsPage />} />
            <Route path="clientes/:id" element={<ClientProfile />} />
            <Route path="diagnostico" element={<DiagnosticPage />} />
            <Route path="perfis-estilo" element={<StyleProfiles />} />
            <Route path="paletas" element={<PalettesPage />} />
            <Route path="guarda-roupa" element={<WardrobePage />} />
            <Route path="looks" element={<LooksGallery />} />
            <Route path="assistente" element={<StyleAssistant />} />
          </Route>

          {/* Client Portal */}
          <Route path="/cliente" element={<ClientLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="diagnostico" element={<ClientDiagnostic />} />
            <Route path="perfil-estilo" element={<ClientStyleProfile />} />
            <Route path="paleta" element={<ClientPalette />} />
            <Route path="guarda-roupa" element={<ClientWardrobe />} />
            <Route path="looks" element={<ClientLooks />} />
            <Route path="inspiracoes" element={<ClientInspirations />} />
            <Route path="assistente" element={<ClientAssistant />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
