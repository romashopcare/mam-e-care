"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Droplet, Moon, Sun, AlertCircle, Baby, ChevronLeft, ChevronRight } from "lucide-react";

interface CycleData {
  lastPeriodDate: string;
  cycleLength: number;
  periodDuration: number;
}

export default function MenstrualCycle() {
  const [step, setStep] = useState<"input" | "calendar">("input");
  const [cycleData, setCycleData] = useState<CycleData>({
    lastPeriodDate: "",
    cycleLength: 28,
    periodDuration: 5
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleInputChange = (field: keyof CycleData, value: string | number) => {
    setCycleData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCycle = () => {
    if (cycleData.lastPeriodDate) {
      setStep("calendar");
    }
  };

  // Cálculos do ciclo
  const getLastPeriodDate = () => new Date(cycleData.lastPeriodDate);
  
  const getOvulationDate = () => {
    const date = getLastPeriodDate();
    date.setDate(date.getDate() + cycleData.cycleLength - 14);
    return date;
  };

  const getFertileWindowStart = () => {
    const date = getOvulationDate();
    date.setDate(date.getDate() - 5);
    return date;
  };

  const getFertileWindowEnd = () => {
    const date = getOvulationDate();
    date.setDate(date.getDate() + 1);
    return date;
  };

  const getNextPeriodDate = () => {
    const date = getLastPeriodDate();
    date.setDate(date.getDate() + cycleData.cycleLength);
    return date;
  };

  const getPeriodEndDate = () => {
    const date = getLastPeriodDate();
    date.setDate(date.getDate() + cycleData.periodDuration - 1);
    return date;
  };

  const getDayType = (date: Date): "period" | "fertile" | "ovulation" | "safe" => {
    const time = date.getTime();
    const lastPeriod = getLastPeriodDate().getTime();
    const periodEnd = getPeriodEndDate().getTime();
    const fertileStart = getFertileWindowStart().getTime();
    const fertileEnd = getFertileWindowEnd().getTime();
    const ovulation = getOvulationDate().getTime();
    const nextPeriod = getNextPeriodDate().getTime();
    const nextPeriodEnd = new Date(nextPeriod);
    nextPeriodEnd.setDate(nextPeriodEnd.getDate() + cycleData.periodDuration - 1);

    // Período menstrual atual
    if (time >= lastPeriod && time <= periodEnd) return "period";
    
    // Próximo período menstrual
    if (time >= nextPeriod && time <= nextPeriodEnd.getTime()) return "period";
    
    // Dia da ovulação
    if (time === ovulation) return "ovulation";
    
    // Janela fértil
    if (time >= fertileStart && time <= fertileEnd) return "fertile";
    
    // Dias seguros
    return "safe";
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    // Preencher dias vazios do início
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Preencher dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Tela de Input
  if (step === "input") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 via-rose-400 to-red-500 rounded-full mb-4 shadow-lg">
              <Moon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-3">
              Controle do Ciclo Menstrual
            </h1>
            <p className="text-gray-600 text-lg">
              Acompanhe seu ciclo e conheça seus dias férteis
            </p>
          </div>

          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/90">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Informações do Ciclo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="space-y-2">
                <Label htmlFor="lastPeriod" className="text-base font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-500" />
                  Data da Última Menstruação
                </Label>
                <Input
                  id="lastPeriod"
                  type="date"
                  className="h-12 text-base border-2 focus:border-rose-400"
                  value={cycleData.lastPeriodDate}
                  onChange={(e) => handleInputChange("lastPeriodDate", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cycleLength" className="text-base font-semibold text-gray-700">
                  Duração do Ciclo (dias)
                </Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="cycleLength"
                    type="number"
                    min="21"
                    max="35"
                    className="h-12 text-base border-2 focus:border-rose-400"
                    value={cycleData.cycleLength}
                    onChange={(e) => handleInputChange("cycleLength", parseInt(e.target.value))}
                  />
                  <span className="text-gray-600 text-sm">Geralmente entre 21-35 dias</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="periodDuration" className="text-base font-semibold text-gray-700">
                  Duração da Menstruação (dias)
                </Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="periodDuration"
                    type="number"
                    min="3"
                    max="7"
                    className="h-12 text-base border-2 focus:border-rose-400"
                    value={cycleData.periodDuration}
                    onChange={(e) => handleInputChange("periodDuration", parseInt(e.target.value))}
                  />
                  <span className="text-gray-600 text-sm">Geralmente entre 3-7 dias</span>
                </div>
              </div>

              <Button
                onClick={calculateCycle}
                disabled={!cycleData.lastPeriodDate}
                className="w-full h-12 text-base bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-pink-600 hover:via-rose-600 hover:to-red-600 shadow-lg disabled:opacity-50"
              >
                Ver Meu Calendário
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Calendário do Ciclo
  const days = getDaysInMonth(currentMonth);
  const ovulationDate = getOvulationDate();
  const nextPeriodDate = getNextPeriodDate();
  const fertileStart = getFertileWindowStart();
  const fertileEnd = getFertileWindowEnd();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-3">
            Seu Calendário Menstrual
          </h1>
          <p className="text-gray-600 text-lg">
            Acompanhe seu ciclo e planeje-se melhor
          </p>
        </div>

        {/* Cards de Informação */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-red-400 to-red-500 text-white pb-6">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Droplet className="w-5 h-5" />
                Próxima Menstruação
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-2xl font-bold text-red-600">{formatDate(nextPeriodDate)}</p>
              <p className="text-sm text-gray-600 mt-2">
                Em {Math.ceil((nextPeriodDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} dias
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-pink-400 to-pink-500 text-white pb-6">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sun className="w-5 h-5" />
                Ovulação
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-2xl font-bold text-pink-600">{formatDate(ovulationDate)}</p>
              <p className="text-sm text-gray-600 mt-2">Dia mais fértil</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-purple-400 to-purple-500 text-white pb-6">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Heart className="w-5 h-5" />
                Período Fértil
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg font-bold text-purple-600">
                {formatDate(fertileStart)}
              </p>
              <p className="text-sm text-gray-600 mt-1">até {formatDate(fertileEnd)}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-blue-400 to-blue-500 text-white pb-6">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Baby className="w-5 h-5" />
                Melhor para Conceber
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg font-bold text-blue-600">
                {formatDate(new Date(ovulationDate.getTime() - 2 * 24 * 60 * 60 * 1000))}
              </p>
              <p className="text-sm text-gray-600 mt-1">2 dias antes da ovulação</p>
            </CardContent>
          </Card>
        </div>

        {/* Calendário */}
        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 text-white">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                onClick={previousMonth}
                className="text-white hover:bg-white/20 h-10 w-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <CardTitle className="text-2xl">
                {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextMonth}
                className="text-white hover:bg-white/20 h-10 w-10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {/* Legenda */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-700">Menstruação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                <span className="text-sm text-gray-700">Ovulação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                <span className="text-sm text-gray-700">Período Fértil</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-200"></div>
                <span className="text-sm text-gray-700">Dias Seguros</span>
              </div>
            </div>

            {/* Dias da Semana */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                <div key={day} className="text-center font-bold text-gray-600 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Dias do Mês */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (!day) {
                  return <div key={index} className="aspect-square"></div>;
                }

                const dayType = getDayType(day);
                const today = isToday(day);

                let bgColor = "bg-blue-100 hover:bg-blue-200";
                let textColor = "text-gray-800";
                let icon = null;

                if (dayType === "period") {
                  bgColor = "bg-red-500 hover:bg-red-600";
                  textColor = "text-white";
                  icon = <Droplet className="w-3 h-3" />;
                } else if (dayType === "ovulation") {
                  bgColor = "bg-pink-500 hover:bg-pink-600";
                  textColor = "text-white";
                  icon = <Sun className="w-3 h-3" />;
                } else if (dayType === "fertile") {
                  bgColor = "bg-purple-400 hover:bg-purple-500";
                  textColor = "text-white";
                  icon = <Heart className="w-3 h-3" />;
                }

                return (
                  <div
                    key={index}
                    className={`aspect-square rounded-xl ${bgColor} ${textColor} flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                      today ? 'ring-4 ring-yellow-400 shadow-lg scale-110' : ''
                    }`}
                  >
                    <span className="font-bold text-lg">{day.getDate()}</span>
                    {icon && <div className="mt-1">{icon}</div>}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Informações Adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-br from-purple-400 to-purple-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Dicas para o Período Fértil
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                <Baby className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Para engravidar, tenha relações 2-3 dias antes da ovulação</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-xl">
                <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">O dia da ovulação é o mais fértil do ciclo</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <Moon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Use proteção nos dias férteis se não deseja engravidar</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-br from-blue-400 to-blue-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Dias Não Férteis (Seguros)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Dias seguros: após a ovulação até o início da próxima menstruação</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-xl">
                <AlertCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Atenção: nenhum método natural é 100% seguro</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl">
                <Heart className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Consulte sempre um ginecologista para orientações personalizadas</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setStep("input")}
            variant="outline"
            className="h-12 px-8 text-base border-2"
          >
            Atualizar Informações
          </Button>
        </div>
      </div>
    </div>
  );
}
