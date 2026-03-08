import { useState } from "react";
import type { PecaGuardaRoupa, Look, OrigemPeca } from "@/types/wardrobe";

const INITIAL_PECAS: PecaGuardaRoupa[] = [
  { id: "1", nome: "Blazer Alfaiataria", categoria: "Terceiras Peças", cor: "Preto", ocasiao: "Reunião", observacao: "Peça-chave para reuniões. Corte estruturado.", criadoPor: "estrategista" },
  { id: "2", nome: "Camisa Seda", categoria: "Blusas", cor: "Off-white", ocasiao: "Trabalho", observacao: "Versátil. Combina com paleta Inverno Profundo.", criadoPor: "estrategista" },
  { id: "3", nome: "Calça Reta", categoria: "Calças", cor: "Marinho", ocasiao: "Trabalho", observacao: "Corte clássico, cintura alta. Base do guarda-roupa.", criadoPor: "estrategista" },
  { id: "4", nome: "Vestido Midi", categoria: "Vestidos", cor: "Bordô", ocasiao: "Evento", observacao: "Para eventos e jantares. Tom impactante.", criadoPor: "cliente" },
  { id: "5", nome: "Scarpin", categoria: "Sapatos", cor: "Nude", ocasiao: "Trabalho", observacao: "Alongamento visual. Combina com tudo.", criadoPor: "estrategista" },
  { id: "6", nome: "Bolsa Estruturada", categoria: "Acessórios", cor: "Preto", ocasiao: "Dia a dia", observacao: "Tamanho médio, alça de corrente prateada.", criadoPor: "cliente" },
];

const INITIAL_LOOKS: Look[] = [
  { id: "1", nome: "Power Meeting", ocasiao: "Reunião", pecas: ["1", "2", "3", "5"], observacao: "Look de autoridade para reuniões importantes.", criadoPor: "estrategista" },
  { id: "2", nome: "Casual Friday", ocasiao: "Trabalho", pecas: ["2", "3", "6"], observacao: "Elegante sem ser formal.", criadoPor: "estrategista" },
  { id: "3", nome: "Gala Night", ocasiao: "Evento", pecas: ["4", "5", "6"], observacao: "Impactante para eventos noturnos.", criadoPor: "cliente" },
];

export function useWardrobe() {
  const [pecas, setPecas] = useState<PecaGuardaRoupa[]>(INITIAL_PECAS);
  const [looks, setLooks] = useState<Look[]>(INITIAL_LOOKS);

  const addPeca = (peca: Omit<PecaGuardaRoupa, "id">) => {
    const newPeca = { ...peca, id: Date.now().toString() };
    setPecas((prev) => [...prev, newPeca]);
    return newPeca;
  };

  const updatePeca = (id: string, data: Partial<PecaGuardaRoupa>) => {
    setPecas((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)));
  };

  const deletePeca = (id: string) => {
    setPecas((prev) => prev.filter((p) => p.id !== id));
  };

  const addLook = (look: Omit<Look, "id">) => {
    const newLook = { ...look, id: Date.now().toString() };
    setLooks((prev) => [...prev, newLook]);
    return newLook;
  };

  const updateLook = (id: string, data: Partial<Look>) => {
    setLooks((prev) => prev.map((l) => (l.id === id ? { ...l, ...data } : l)));
  };

  const deleteLook = (id: string) => {
    setLooks((prev) => prev.filter((l) => l.id !== id));
  };

  const getPecaById = (id: string) => pecas.find((p) => p.id === id);

  return { pecas, looks, addPeca, updatePeca, deletePeca, addLook, updateLook, deleteLook, getPecaById };
}
