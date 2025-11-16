"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { User, Calendar, Heart, Sparkles } from "lucide-react";

interface OnboardingFormProps {
  onComplete: (data: UserData) => void;
}

export interface UserData {
  name: string;
  age: string;
  lastPeriodDate: string;
  cycleLength: string;
}

export default function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    age: "",
    lastPeriodDate: "",
    cycleLength: "28",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.age || !formData.lastPeriodDate) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Salvar no localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    
    // Chamar callback
    onComplete(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12 shadow-2xl border-2 border-pink-100 bg-white/95 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-4 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Bem-vinda!
          </h1>
          <p className="text-gray-600 text-lg">
            Vamos começar conhecendo você melhor
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <User className="w-5 h-5 text-pink-500" />
              Nome Completo *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-14 text-lg border-2 border-gray-200 focus:border-pink-400 rounded-xl"
              required
            />
          </div>

          {/* Idade */}
          <div className="space-y-2">
            <Label htmlFor="age" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              Idade *
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Digite sua idade"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="h-14 text-lg border-2 border-gray-200 focus:border-purple-400 rounded-xl"
              min="10"
              max="60"
              required
            />
          </div>

          {/* Data da Última Menstruação */}
          <div className="space-y-2">
            <Label htmlFor="lastPeriod" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              Data da Última Menstruação *
            </Label>
            <Input
              id="lastPeriod"
              type="date"
              value={formData.lastPeriodDate}
              onChange={(e) => setFormData({ ...formData, lastPeriodDate: e.target.value })}
              className="h-14 text-lg border-2 border-gray-200 focus:border-rose-400 rounded-xl"
              required
            />
          </div>

          {/* Duração do Ciclo */}
          <div className="space-y-2">
            <Label htmlFor="cycleLength" className="text-lg font-semibold text-gray-700">
              Duração Média do Ciclo (dias)
            </Label>
            <Input
              id="cycleLength"
              type="number"
              placeholder="28"
              value={formData.cycleLength}
              onChange={(e) => setFormData({ ...formData, cycleLength: e.target.value })}
              className="h-14 text-lg border-2 border-gray-200 focus:border-pink-400 rounded-xl"
              min="21"
              max="35"
            />
            <p className="text-sm text-gray-500">
              Geralmente entre 21 e 35 dias (padrão: 28 dias)
            </p>
          </div>

          {/* Botão de Envio */}
          <Button
            type="submit"
            className="w-full h-16 text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 hover:from-pink-600 hover:via-purple-600 hover:to-rose-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Começar Jornada
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          * Campos obrigatórios
        </p>
      </Card>
    </div>
  );
}
