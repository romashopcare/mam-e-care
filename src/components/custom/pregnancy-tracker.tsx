"use client";

import { useState } from "react";
import { pregnancyWeeks, calculateDueDate, calculateCurrentWeek, getBMI, type PregnancyProfile } from "@/lib/pregnancy-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart, Calendar, Scale, Ruler, Activity, Moon, Apple, Brain, ChevronLeft, ChevronRight, FileText } from "lucide-react";

export default function PregnancyTracker() {
  const [step, setStep] = useState<"questionnaire" | "report" | "tracker">("questionnaire");
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [profile, setProfile] = useState<Partial<PregnancyProfile>>({
    lifestyle: { exercise: "", diet: "", sleep: "", stress: "" },
    medicalHistory: { conditions: [], medications: [], allergies: [] }
  });
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  const handleInputChange = (field: string, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleLifestyleChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      lifestyle: { ...prev.lifestyle!, [field]: value }
    }));
  };

  const completeQuestionnaire = () => {
    if (profile.lastPeriod) {
      const dueDate = calculateDueDate(profile.lastPeriod);
      const currentWeek = calculateCurrentWeek(profile.lastPeriod);
      setProfile(prev => ({ ...prev, dueDate, currentWeek }));
      setSelectedWeek(currentWeek);
      setStep("report");
    }
  };

  const goToTracker = () => {
    setStep("tracker");
  };

  const bmi = profile.weight && profile.height ? getBMI(profile.weight, profile.height) : null;

  // Questionário
  if (step === "questionnaire") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500 rounded-full mb-4 shadow-lg">
              <Baby className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Bem-vinda ao Seu Diário de Gestação
            </h1>
            <p className="text-gray-600 text-lg">
              Vamos conhecer você e acompanhar cada momento especial
            </p>
          </div>

          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/90">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-800">Etapa {currentSubStep} de 3</CardTitle>
                <Badge variant="secondary" className="text-base px-4 py-1 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700">
                  {Math.round((currentSubStep / 3) * 100)}%
                </Badge>
              </div>
              <Progress value={(currentSubStep / 3) * 100} className="h-3 bg-gray-100" />
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              {currentSubStep === 1 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3 pb-2 border-b-2 border-rose-200">
                    <div className="p-2 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    Informações Pessoais
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold text-gray-700">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      className="h-12 text-base border-2 focus:border-rose-400"
                      value={profile.name || ""}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-base font-semibold text-gray-700">Idade</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Ex: 28"
                        className="h-12 text-base border-2 focus:border-rose-400"
                        value={profile.age || ""}
                        onChange={(e) => handleInputChange("age", parseInt(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastPeriod" className="text-base font-semibold text-gray-700">Data da Última Menstruação</Label>
                      <Input
                        id="lastPeriod"
                        type="date"
                        className="h-12 text-base border-2 focus:border-rose-400"
                        value={profile.lastPeriod || ""}
                        onChange={(e) => handleInputChange("lastPeriod", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="height" className="flex items-center gap-2 text-base font-semibold text-gray-700">
                        <Ruler className="w-4 h-4 text-rose-500" />
                        Altura (cm)
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="Ex: 165"
                        className="h-12 text-base border-2 focus:border-rose-400"
                        value={profile.height || ""}
                        onChange={(e) => handleInputChange("height", parseFloat(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight" className="flex items-center gap-2 text-base font-semibold text-gray-700">
                        <Scale className="w-4 h-4 text-rose-500" />
                        Peso Atual (kg)
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="Ex: 65"
                        className="h-12 text-base border-2 focus:border-rose-400"
                        value={profile.weight || ""}
                        onChange={(e) => handleInputChange("weight", parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentSubStep === 2 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3 pb-2 border-b-2 border-purple-200">
                    <div className="p-2 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    Estilo de Vida e Rotina
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="exercise" className="text-base font-semibold text-gray-700">Atividade Física</Label>
                    <select
                      id="exercise"
                      className="w-full h-12 p-3 border-2 rounded-md focus:border-purple-400 focus:outline-none text-base"
                      value={profile.lifestyle?.exercise || ""}
                      onChange={(e) => handleLifestyleChange("exercise", e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option value="sedentary">Sedentária</option>
                      <option value="light">Leve (1-2x/semana)</option>
                      <option value="moderate">Moderada (3-4x/semana)</option>
                      <option value="active">Ativa (5+x/semana)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="diet" className="flex items-center gap-2 text-base font-semibold text-gray-700">
                      <Apple className="w-4 h-4 text-green-500" />
                      Alimentação
                    </Label>
                    <select
                      id="diet"
                      className="w-full h-12 p-3 border-2 rounded-md focus:border-purple-400 focus:outline-none text-base"
                      value={profile.lifestyle?.diet || ""}
                      onChange={(e) => handleLifestyleChange("diet", e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option value="balanced">Balanceada</option>
                      <option value="vegetarian">Vegetariana</option>
                      <option value="vegan">Vegana</option>
                      <option value="needs-improvement">Precisa melhorar</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sleep" className="flex items-center gap-2 text-base font-semibold text-gray-700">
                      <Moon className="w-4 h-4 text-indigo-500" />
                      Qualidade do Sono
                    </Label>
                    <select
                      id="sleep"
                      className="w-full h-12 p-3 border-2 rounded-md focus:border-purple-400 focus:outline-none text-base"
                      value={profile.lifestyle?.sleep || ""}
                      onChange={(e) => handleLifestyleChange("sleep", e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option value="excellent">Excelente (7-9h)</option>
                      <option value="good">Bom (6-7h)</option>
                      <option value="fair">Regular (5-6h)</option>
                      <option value="poor">Ruim (menos de 5h)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stress" className="flex items-center gap-2 text-base font-semibold text-gray-700">
                      <Brain className="w-4 h-4 text-orange-500" />
                      Nível de Estresse
                    </Label>
                    <select
                      id="stress"
                      className="w-full h-12 p-3 border-2 rounded-md focus:border-purple-400 focus:outline-none text-base"
                      value={profile.lifestyle?.stress || ""}
                      onChange={(e) => handleLifestyleChange("stress", e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option value="low">Baixo</option>
                      <option value="moderate">Moderado</option>
                      <option value="high">Alto</option>
                    </select>
                  </div>
                </div>
              )}

              {currentSubStep === 3 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3 pb-2 border-b-2 border-blue-200">
                    <div className="p-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    Histórico Médico (Opcional)
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="conditions" className="text-base font-semibold text-gray-700">Condições Médicas Pré-existentes</Label>
                    <Input
                      id="conditions"
                      placeholder="Ex: Diabetes, Hipertensão (separado por vírgula)"
                      className="h-12 text-base border-2 focus:border-blue-400"
                      onChange={(e) => setProfile(prev => ({
                        ...prev,
                        medicalHistory: {
                          ...prev.medicalHistory!,
                          conditions: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                        }
                      }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medications" className="text-base font-semibold text-gray-700">Medicamentos em Uso</Label>
                    <Input
                      id="medications"
                      placeholder="Ex: Ácido fólico, Vitaminas (separado por vírgula)"
                      className="h-12 text-base border-2 focus:border-blue-400"
                      onChange={(e) => setProfile(prev => ({
                        ...prev,
                        medicalHistory: {
                          ...prev.medicalHistory!,
                          medications: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                        }
                      }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allergies" className="text-base font-semibold text-gray-700">Alergias</Label>
                    <Input
                      id="allergies"
                      placeholder="Ex: Penicilina, Lactose (separado por vírgula)"
                      className="h-12 text-base border-2 focus:border-blue-400"
                      onChange={(e) => setProfile(prev => ({
                        ...prev,
                        medicalHistory: {
                          ...prev.medicalHistory!,
                          allergies: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                        }
                      }))}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-6">
                {currentSubStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentSubStep(prev => prev - 1)}
                    className="flex-1 h-12 text-base border-2 hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Voltar
                  </Button>
                )}
                
                {currentSubStep < 3 ? (
                  <Button
                    onClick={() => setCurrentSubStep(prev => prev + 1)}
                    className="flex-1 h-12 text-base bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 shadow-lg"
                  >
                    Próximo
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={completeQuestionnaire}
                    disabled={!profile.lastPeriod || !profile.name}
                    className="flex-1 h-12 text-base bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 shadow-lg disabled:opacity-50"
                  >
                    Ver Relatório
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Relatório
  if (step === "report") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Seu Relatório de Gestação
            </h1>
            <p className="text-gray-600 text-lg">
              Olá, {profile.name}! Aqui está um resumo completo do seu perfil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-rose-400 via-pink-400 to-pink-500 text-white pb-8">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Calendar className="w-6 h-6" />
                  </div>
                  Informações da Gestação
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-4 p-6">
                <div className="flex justify-between items-center p-4 bg-rose-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Semana Atual:</span>
                  <span className="font-bold text-2xl text-rose-600">{profile.currentWeek} semanas</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-pink-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Data Prevista:</span>
                  <span className="font-semibold text-lg">{new Date(profile.dueDate!).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Trimestre:</span>
                  <span className="font-semibold text-lg">
                    {profile.currentWeek! <= 13 ? "1º Trimestre" : profile.currentWeek! <= 27 ? "2º Trimestre" : "3º Trimestre"}
                  </span>
                </div>
                <div className="pt-4">
                  <Progress value={(profile.currentWeek! / 40) * 100} className="h-4 bg-gray-100" />
                  <p className="text-sm text-center text-gray-600 mt-3 font-semibold">{Math.round((profile.currentWeek! / 40) * 100)}% da gestação completa</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500 text-white pb-8">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Scale className="w-6 h-6" />
                  </div>
                  Dados Físicos
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-4 p-6">
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Idade:</span>
                  <span className="font-semibold text-lg">{profile.age} anos</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Altura:</span>
                  <span className="font-semibold text-lg">{profile.height} cm</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Peso Atual:</span>
                  <span className="font-semibold text-lg">{profile.weight} kg</span>
                </div>
                {bmi && (
                  <>
                    <div className="flex justify-between items-center p-4 bg-cyan-50 rounded-xl">
                      <span className="text-gray-700 font-medium">IMC:</span>
                      <span className="font-semibold text-lg">{bmi.value}</span>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-5 rounded-xl mt-4 border-2 border-purple-200">
                      <p className="text-base font-bold text-purple-900">{bmi.category}</p>
                      <p className="text-sm text-purple-700 mt-2">{bmi.recommendation}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-2xl border-0 mb-6 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 text-white pb-8">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Activity className="w-6 h-6" />
                </div>
                Estilo de Vida
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
                  <div className="p-3 bg-blue-500 rounded-xl">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Atividade Física</p>
                    <p className="font-bold text-lg capitalize text-gray-800">{profile.lifestyle?.exercise}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
                  <div className="p-3 bg-green-500 rounded-xl">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Alimentação</p>
                    <p className="font-bold text-lg capitalize text-gray-800">{profile.lifestyle?.diet}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border-2 border-indigo-200">
                  <div className="p-3 bg-indigo-500 rounded-xl">
                    <Moon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Sono</p>
                    <p className="font-bold text-lg capitalize text-gray-800">{profile.lifestyle?.sleep}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
                  <div className="p-3 bg-orange-500 rounded-xl">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Estresse</p>
                    <p className="font-bold text-lg capitalize text-gray-800">{profile.lifestyle?.stress}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {(profile.medicalHistory?.conditions?.length! > 0 || 
            profile.medicalHistory?.medications?.length! > 0 || 
            profile.medicalHistory?.allergies?.length! > 0) && (
            <Card className="shadow-2xl border-0 mb-8 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-red-400 via-rose-400 to-pink-500 text-white pb-8">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <FileText className="w-6 h-6" />
                  </div>
                  Histórico Médico
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-5 p-6">
                {profile.medicalHistory?.conditions?.length! > 0 && (
                  <div>
                    <p className="text-base font-bold text-gray-800 mb-3">Condições:</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.medicalHistory?.conditions?.map((condition, i) => (
                        <Badge key={i} variant="secondary" className="text-base px-4 py-2">{condition}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                {profile.medicalHistory?.medications?.length! > 0 && (
                  <div>
                    <p className="text-base font-bold text-gray-800 mb-3">Medicamentos:</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.medicalHistory?.medications?.map((med, i) => (
                        <Badge key={i} variant="secondary" className="text-base px-4 py-2">{med}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                {profile.medicalHistory?.allergies?.length! > 0 && (
                  <div>
                    <p className="text-base font-bold text-gray-800 mb-3">Alergias:</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.medicalHistory?.allergies?.map((allergy, i) => (
                        <Badge key={i} variant="destructive" className="text-base px-4 py-2">{allergy}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <div className="flex justify-center">
            <Button
              onClick={goToTracker}
              size="lg"
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-lg px-10 py-6 shadow-2xl"
            >
              <Baby className="w-6 h-6 mr-3" />
              Acompanhar Desenvolvimento do Bebê
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Tracker de Desenvolvimento
  const currentWeekData = pregnancyWeeks.find(w => w.week === (selectedWeek || profile.currentWeek));
  const weekProgress = ((selectedWeek || profile.currentWeek!) / 40) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Desenvolvimento do Seu Bebê
          </h1>
          <p className="text-gray-600 text-lg">
            Acompanhe semana a semana o crescimento do seu pequeno
          </p>
        </div>

        {/* Seletor de Semanas */}
        <Card className="shadow-2xl border-0 mb-8 overflow-hidden">
          <CardHeader className="bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500 text-white pb-8">
            <CardTitle className="text-center text-2xl">Selecione a Semana</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 p-6">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 border-2"
                onClick={() => setSelectedWeek(prev => Math.max((prev || profile.currentWeek!) - 1, 4))}
                disabled={(selectedWeek || profile.currentWeek!) <= 4}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex-1">
                <div className="text-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                    {selectedWeek || profile.currentWeek}
                  </span>
                  <span className="text-2xl text-gray-600 ml-3">semanas</span>
                  {(selectedWeek || profile.currentWeek) === profile.currentWeek && (
                    <Badge className="ml-4 bg-green-500 text-base px-4 py-1">Atual</Badge>
                  )}
                </div>
                <Progress value={weekProgress} className="h-4 bg-gray-100" />
                <p className="text-center text-gray-600 mt-2 font-semibold">{Math.round(weekProgress)}% da gestação</p>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 border-2"
                onClick={() => setSelectedWeek(prev => Math.min((prev || profile.currentWeek!) + 1, 40))}
                disabled={(selectedWeek || profile.currentWeek!) >= 40}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-11 gap-2">
              {[4, 5, 8, 12, 16, 20, 24, 28, 32, 36, 40].map(week => (
                <Button
                  key={week}
                  variant={(selectedWeek || profile.currentWeek) === week ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedWeek(week)}
                  className={`h-12 text-base font-bold ${(selectedWeek || profile.currentWeek) === week ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600' : 'border-2'}`}
                >
                  {week}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {currentWeekData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Visualização do Bebê com Imagem 3D */}
            <Card className="shadow-2xl border-0 lg:col-span-1 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-rose-400 via-pink-400 to-pink-500 text-white pb-8">
                <CardTitle className="text-center text-2xl">Tamanho do Bebê</CardTitle>
              </CardHeader>
              <CardContent className="pt-8 p-6">
                <div className="text-center space-y-6">
                  {/* Imagem 3D do Feto */}
                  <div className="relative w-full aspect-square max-w-xs mx-auto bg-gradient-to-br from-rose-50 to-purple-50 rounded-3xl p-6 shadow-inner">
                    <img 
                      src={currentWeekData.fetalImage} 
                      alt={`Feto com ${currentWeekData.week} semanas`}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-5 rounded-2xl border-2 border-rose-200">
                      <p className="text-4xl font-bold text-rose-600">{currentWeekData.size}</p>
                      <p className="text-gray-700 mt-2 font-semibold">Comprimento</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-5 rounded-2xl border-2 border-purple-200">
                      <p className="text-sm text-gray-600 font-medium">Comparação:</p>
                      <p className="text-xl font-bold text-purple-700 mt-1">{currentWeekData.comparison}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-5 rounded-2xl border-2 border-pink-200">
                      <p className="text-3xl font-bold text-pink-600">{currentWeekData.weight}</p>
                      <p className="text-gray-700 mt-2 font-semibold">Peso aproximado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações Detalhadas */}
            <Card className="shadow-2xl border-0 lg:col-span-2 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-500 text-white pb-8">
                <CardTitle className="text-2xl">Semana {currentWeekData.week}</CardTitle>
                <CardDescription className="text-purple-100 text-base mt-2">
                  {currentWeekData.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 p-6">
                <Tabs defaultValue="development" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 h-12 bg-gray-100">
                    <TabsTrigger value="development" className="text-base font-semibold">Desenvolvimento</TabsTrigger>
                    <TabsTrigger value="tips" className="text-base font-semibold">Dicas para Você</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="development" className="space-y-4 mt-6">
                    <div className="space-y-4">
                      {currentWeekData.developments.map((dev, index) => (
                        <div key={index} className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-800 text-base leading-relaxed">{dev}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tips" className="space-y-4 mt-6">
                    <div className="space-y-4">
                      {currentWeekData.motherTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-4 p-5 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200">
                          <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex-shrink-0 mt-0.5 shadow-lg">
                            <Heart className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-gray-800 text-base leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Linha do Tempo */}
        <Card className="shadow-2xl border-0 mt-8 overflow-hidden">
          <CardHeader className="bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 text-white pb-8">
            <CardTitle className="text-2xl">Linha do Tempo da Gestação</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 p-6">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-300 via-pink-300 to-purple-300 rounded-full"></div>
              <div className="space-y-6 pl-10">
                {pregnancyWeeks.map((week) => (
                  <div
                    key={week.week}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      (selectedWeek || profile.currentWeek) === week.week
                        ? 'scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedWeek(week.week)}
                  >
                    <div className={`absolute -left-[41px] w-4 h-4 rounded-full transition-all duration-300 ${
                      (selectedWeek || profile.currentWeek) === week.week
                        ? 'bg-gradient-to-br from-rose-500 to-pink-500 ring-4 ring-rose-200 shadow-lg'
                        : 'bg-gray-300'
                    }`}></div>
                    <div className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                      (selectedWeek || profile.currentWeek) === week.week
                        ? 'border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-xl text-gray-800">Semana {week.week}</h4>
                        <Badge variant="secondary" className="text-base px-3 py-1">{week.comparison}</Badge>
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed">{week.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
