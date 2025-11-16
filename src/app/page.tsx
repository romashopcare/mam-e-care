"use client";

import { useState, useEffect } from "react";
import PregnancyTracker from "@/components/custom/pregnancy-tracker";
import MenstrualCycle from "@/components/custom/menstrual-cycle";
import OnboardingForm, { UserData } from "@/components/custom/onboarding-form";
import AuthForm from "@/components/custom/auth-form";
import { Baby, Moon, User, Calendar, Heart, BookOpen, Bell, ChevronLeft, ChevronRight, Plus, Activity, Pill, Stethoscope, Apple, Droplets, Brain } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"pregnancy" | "cycle" | "profile" | "calendar" | "health" | "articles">("pregnancy");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");

  // Estados do Calendário
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<{[key: string]: {type: string, title: string, time?: string}[]}>({});

  // Estados da Saúde
  const [healthMetrics, setHealthMetrics] = useState({
    weight: 65,
    bloodPressure: "120/80",
    glucose: 90,
    waterIntake: 6,
    exerciseMinutes: 30
  });

  // Verificar se usuário já está autenticado e carregar seus dados
  useEffect(() => {
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      const user = JSON.parse(authUser);
      setIsAuthenticated(true);
      setCurrentUserEmail(user.email);
      
      // Carregar dados do onboarding específicos do usuário
      const userDataKey = `userData_${user.email}`;
      const savedData = localStorage.getItem(userDataKey);
      if (savedData) {
        setUserData(JSON.parse(savedData));
        setIsOnboarded(true);
      }

      // Carregar eventos do calendário específicos do usuário
      const eventsKey = `calendarEvents_${user.email}`;
      const savedEvents = localStorage.getItem(eventsKey);
      if (savedEvents) {
        setEvents(JSON.parse(savedEvents));
      }

      // Carregar métricas de saúde específicas do usuário
      const healthKey = `healthMetrics_${user.email}`;
      const savedHealth = localStorage.getItem(healthKey);
      if (savedHealth) {
        setHealthMetrics(JSON.parse(savedHealth));
      }
    }
  }, []);

  // Callback quando completar autenticação
  const handleAuthComplete = (authData: { email: string; name: string }) => {
    setIsAuthenticated(true);
    setCurrentUserEmail(authData.email);
    
    // Verificar se usuário já tem dados de onboarding salvos
    const userDataKey = `userData_${authData.email}`;
    const savedData = localStorage.getItem(userDataKey);
    if (savedData) {
      setUserData(JSON.parse(savedData));
      setIsOnboarded(true);
      
      // Carregar também eventos e métricas de saúde
      const eventsKey = `calendarEvents_${authData.email}`;
      const savedEvents = localStorage.getItem(eventsKey);
      if (savedEvents) {
        setEvents(JSON.parse(savedEvents));
      }

      const healthKey = `healthMetrics_${authData.email}`;
      const savedHealth = localStorage.getItem(healthKey);
      if (savedHealth) {
        setHealthMetrics(JSON.parse(savedHealth));
      }
    }
  };

  // Callback quando completar cadastro
  const handleOnboardingComplete = (data: UserData) => {
    setUserData(data);
    setIsOnboarded(true);
    // Salvar dados do onboarding associados ao email do usuário
    const userDataKey = `userData_${currentUserEmail}`;
    localStorage.setItem(userDataKey, JSON.stringify(data));
  };

  // Funções do Calendário
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const addEvent = (date: Date, type: string, title: string, time?: string) => {
    const dateKey = formatDateKey(date);
    const newEvents = { ...events };
    if (!newEvents[dateKey]) {
      newEvents[dateKey] = [];
    }
    newEvents[dateKey].push({ type, title, time });
    setEvents(newEvents);
    const eventsKey = `calendarEvents_${currentUserEmail}`;
    localStorage.setItem(eventsKey, JSON.stringify(newEvents));
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // Funções da Saúde
  const updateHealthMetric = (metric: string, value: any) => {
    const newMetrics = { ...healthMetrics, [metric]: value };
    setHealthMetrics(newMetrics);
    const healthKey = `healthMetrics_${currentUserEmail}`;
    localStorage.setItem(healthKey, JSON.stringify(newMetrics));
  };

  // Se não está autenticado, mostrar tela de login
  if (!isAuthenticated) {
    return <AuthForm onAuthComplete={handleAuthComplete} />;
  }

  // Se não fez cadastro completo, mostrar formulário de onboarding
  if (!isOnboarded) {
    return <OnboardingForm onComplete={handleOnboardingComplete} />;
  }

  const menuItems = [
    { id: "pregnancy", label: "Gestação", icon: Baby, color: "from-rose-500 to-pink-500" },
    { id: "cycle", label: "Ciclo", icon: Moon, color: "from-purple-500 to-pink-500" },
    { id: "calendar", label: "Calendário", icon: Calendar, color: "from-blue-500 to-cyan-500" },
    { id: "health", label: "Saúde", icon: Heart, color: "from-red-500 to-rose-500" },
    { id: "articles", label: "Artigos", icon: BookOpen, color: "from-emerald-500 to-teal-500" },
    { id: "profile", label: "Perfil", icon: User, color: "from-indigo-500 to-purple-500" },
  ];

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  // App principal
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header Simplificado */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo e Nome */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  MamãeCare
                </h1>
                <p className="text-xs text-gray-500">Olá, {userData?.name?.split(' ')[0] || 'Mamãe'}!</p>
              </div>
            </div>

            {/* Notificações */}
            <button className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu de Navegação Simplificado - Desktop */}
      <nav className="hidden md:block sticky top-16 z-40 bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 py-3 overflow-x-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105 transform`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
        {activeTab === "pregnancy" && <PregnancyTracker />}
        {activeTab === "cycle" && <MenstrualCycle />}
        {activeTab === "profile" && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Meu Perfil
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {userData?.name?.charAt(0) || 'M'}
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-800">{userData?.name}</p>
                  <p className="text-gray-600">{userData?.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-600">Idade</p>
                  <p className="text-2xl font-bold text-blue-600">{userData?.age} anos</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="text-sm text-gray-600">Telefone</p>
                  <p className="text-2xl font-bold text-purple-600">{userData?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CALENDÁRIO COMPLETO */}
        {activeTab === "calendar" && (
          <div className="space-y-6">
            {/* Header do Calendário */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Calendário
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={previousMonth}
                    className="p-2 rounded-xl bg-blue-100 hover:bg-blue-200 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-blue-600" />
                  </button>
                  <span className="text-lg font-semibold text-gray-700 min-w-[180px] text-center">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-xl bg-blue-100 hover:bg-blue-200 transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Grid do Calendário */}
              <div className="grid grid-cols-7 gap-2">
                {/* Dias da Semana */}
                {dayNames.map((day) => (
                  <div key={day} className="text-center font-semibold text-gray-600 text-sm py-2">
                    {day}
                  </div>
                ))}

                {/* Dias Vazios no Início */}
                {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                  <div key={`empty-${index}`} className="aspect-square"></div>
                ))}

                {/* Dias do Mês */}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1;
                  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                  const dateKey = formatDateKey(date);
                  const dayEvents = events[dateKey] || [];
                  const isToday = new Date().toDateString() === date.toDateString();
                  const isSelected = selectedDate?.toDateString() === date.toDateString();

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(date)}
                      className={`aspect-square p-2 rounded-xl transition-all duration-200 relative ${
                        isToday
                          ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold shadow-lg"
                          : isSelected
                          ? "bg-blue-100 border-2 border-blue-500"
                          : dayEvents.length > 0
                          ? "bg-purple-50 hover:bg-purple-100"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span className={`text-sm ${isToday ? "text-white" : "text-gray-700"}`}>
                        {day}
                      </span>
                      {dayEvents.length > 0 && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {dayEvents.slice(0, 3).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Eventos do Dia Selecionado */}
            {selectedDate && (
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Eventos - {selectedDate.getDate()} de {monthNames[selectedDate.getMonth()]}
                  </h3>
                  <button
                    onClick={() => {
                      const title = prompt("Título do evento:");
                      const time = prompt("Horário (opcional):");
                      if (title) {
                        addEvent(selectedDate, "custom", title, time || undefined);
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-semibold">Adicionar</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {events[formatDateKey(selectedDate)]?.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{event.title}</p>
                        {event.time && (
                          <p className="text-sm text-gray-600">{event.time}</p>
                        )}
                      </div>
                    </div>
                  )) || (
                    <p className="text-center text-gray-500 py-8">
                      Nenhum evento neste dia. Clique em "Adicionar" para criar um.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Atalhos Rápidos */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Atalhos Rápidos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  onClick={() => {
                    const today = new Date();
                    addEvent(today, "appointment", "Consulta Pré-natal", "14:00");
                    setSelectedDate(today);
                  }}
                  className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl hover:shadow-lg transition-all"
                >
                  <Stethoscope className="w-6 h-6 text-pink-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Consulta</p>
                </button>
                <button
                  onClick={() => {
                    const today = new Date();
                    addEvent(today, "exam", "Exame de Ultrassom", "10:00");
                    setSelectedDate(today);
                  }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all"
                >
                  <Activity className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Exame</p>
                </button>
                <button
                  onClick={() => {
                    const today = new Date();
                    addEvent(today, "medication", "Tomar Vitaminas", "08:00");
                    setSelectedDate(today);
                  }}
                  className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all"
                >
                  <Pill className="w-6 h-6 text-purple-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Medicação</p>
                </button>
                <button
                  onClick={() => {
                    const today = new Date();
                    addEvent(today, "exercise", "Caminhada", "17:00");
                    setSelectedDate(today);
                  }}
                  className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-lg transition-all"
                >
                  <Heart className="w-6 h-6 text-emerald-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Exercício</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SAÚDE E BEM-ESTAR COMPLETO */}
        {activeTab === "health" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Saúde e Bem-estar
              </h2>
              <p className="text-gray-600">Acompanhe suas métricas de saúde diariamente</p>
            </div>

            {/* Métricas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Peso */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Peso Atual</p>
                      <p className="text-2xl font-bold text-gray-800">{healthMetrics.weight} kg</p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  value={healthMetrics.weight}
                  onChange={(e) => updateHealthMetric("weight", parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none"
                  placeholder="Atualizar peso"
                />
              </div>

              {/* Pressão Arterial */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pressão Arterial</p>
                      <p className="text-2xl font-bold text-gray-800">{healthMetrics.bloodPressure}</p>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  value={healthMetrics.bloodPressure}
                  onChange={(e) => updateHealthMetric("bloodPressure", e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                  placeholder="Ex: 120/80"
                />
              </div>

              {/* Glicemia */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Glicemia</p>
                      <p className="text-2xl font-bold text-gray-800">{healthMetrics.glucose} mg/dL</p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  value={healthMetrics.glucose}
                  onChange={(e) => updateHealthMetric("glucose", parseInt(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="Atualizar glicemia"
                />
              </div>
            </div>

            {/* Hidratação e Exercícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hidratação */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Hidratação Diária</p>
                    <p className="text-2xl font-bold text-gray-800">{healthMetrics.waterIntake} copos</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                      style={{ width: `${(healthMetrics.waterIntake / 8) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">Meta: 8</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateHealthMetric("waterIntake", Math.max(0, healthMetrics.waterIntake - 1))}
                    className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-all"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateHealthMetric("waterIntake", healthMetrics.waterIntake + 1)}
                    className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg text-white rounded-xl font-semibold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Exercícios */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Exercícios Hoje</p>
                    <p className="text-2xl font-bold text-gray-800">{healthMetrics.exerciseMinutes} min</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                      style={{ width: `${(healthMetrics.exerciseMinutes / 30) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">Meta: 30</span>
                </div>
                <input
                  type="number"
                  value={healthMetrics.exerciseMinutes}
                  onChange={(e) => updateHealthMetric("exerciseMinutes", parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                  placeholder="Minutos de exercício"
                />
              </div>
            </div>

            {/* Dicas de Saúde */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-600" />
                Dicas de Saúde para Gestantes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Apple className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Alimentação Balanceada</p>
                      <p className="text-sm text-gray-600">
                        Consuma frutas, verduras, proteínas e grãos integrais. Evite alimentos crus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Droplets className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Hidratação Adequada</p>
                      <p className="text-sm text-gray-600">
                        Beba pelo menos 2 litros de água por dia para manter-se hidratada.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Activity className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Exercícios Leves</p>
                      <p className="text-sm text-gray-600">
                        Caminhadas, yoga e natação são ótimas opções. Sempre com orientação médica.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Moon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Descanso Adequado</p>
                      <p className="text-sm text-gray-600">
                        Durma de lado e use travesseiros para apoio. Evite telas antes de dormir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso Médico */}
            <div className="bg-gradient-to-r from-red-100 to-rose-100 rounded-2xl p-6 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <Stethoscope className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-red-800 mb-2">Importante - Consulte seu Médico</p>
                  <p className="text-sm text-red-700">
                    Estas métricas são apenas para acompanhamento pessoal. Sempre consulte seu obstetra para orientações médicas específicas e interpretação dos valores. Em caso de valores anormais, procure atendimento médico imediatamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "articles" && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Artigos e Dicas para Mamães
            </h2>
            
            <div className="space-y-6">
              {/* Artigo 1 - Alimentação na Gravidez */}
              <article className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Alimentação Saudável na Gravidez</h3>
                    <p className="text-gray-700 mb-3">
                      Uma alimentação equilibrada é fundamental para o desenvolvimento do bebê. Priorize frutas, verduras, proteínas magras e grãos integrais. Evite alimentos crus ou mal cozidos.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Beba pelo menos 2 litros de água por dia
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Consuma ácido fólico e ferro conforme orientação médica
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Faça pequenas refeições a cada 3 horas
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artigo 2 - Exercícios Seguros */}
              <article className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Exercícios Seguros Durante a Gestação</h3>
                    <p className="text-gray-700 mb-3">
                      Manter-se ativa durante a gravidez traz benefícios para você e seu bebê. Sempre consulte seu médico antes de iniciar qualquer atividade física.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Caminhadas leves são excelentes para circulação
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Yoga e pilates para gestantes ajudam no relaxamento
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Natação é de baixo impacto e muito benéfica
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artigo 3 - Sono e Descanso */}
              <article className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Importância do Sono e Descanso</h3>
                    <p className="text-gray-700 mb-3">
                      O descanso adequado é essencial para sua saúde e do bebê. Durante a gravidez, seu corpo trabalha intensamente e precisa de mais repouso.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Durma de lado, preferencialmente do lado esquerdo
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Use travesseiros para apoiar barriga e pernas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Evite cafeína e telas antes de dormir
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artigo 4 - Saúde Emocional */}
              <article className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cuidando da Saúde Emocional</h3>
                    <p className="text-gray-700 mb-3">
                      As mudanças hormonais podem afetar seu emocional. É normal sentir ansiedade, medo ou insegurança. Não hesite em buscar apoio.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        Converse com seu parceiro, família e amigos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        Pratique meditação e técnicas de respiração
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        Procure apoio psicológico se necessário
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artigo 5 - Preparação para o Parto */}
              <article className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Baby className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Preparando-se para o Parto</h3>
                    <p className="text-gray-700 mb-3">
                      Conhecer as etapas do parto e se preparar física e mentalmente ajuda a reduzir a ansiedade e aumenta a confiança para o grande dia.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        Participe de cursos de preparação para o parto
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        Monte sua mala maternidade com antecedência
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        Converse com seu médico sobre o plano de parto
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artigo 6 - Amamentação */}
              <article className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Preparação para a Amamentação</h3>
                    <p className="text-gray-700 mb-3">
                      A amamentação é um momento especial de conexão com seu bebê. Informar-se antes do nascimento facilita esse processo natural.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        O leite materno é o alimento mais completo para o bebê
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        Busque orientação sobre pega correta e posições
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        Não hesite em pedir ajuda de consultoras de amamentação
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            {/* Aviso Importante */}
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-200">
              <p className="text-sm text-gray-700 text-center">
                <strong className="text-pink-700">Importante:</strong> Estas informações são orientações gerais. Sempre consulte seu médico obstetra para orientações personalizadas sobre sua gestação.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation - Mobile Simplificado */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-200">
        <div className="grid grid-cols-6 gap-1 p-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-br ${item.color} text-white shadow-lg scale-105`
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-semibold">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
