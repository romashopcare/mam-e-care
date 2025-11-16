"use client";

import { useState } from "react";
import { Baby, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

interface AuthFormProps {
  onAuthComplete: (userData: { email: string; name: string }) => void;
}

export default function AuthForm({ onAuthComplete }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter no mínimo 6 caracteres";
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simular autenticação (em produção, conectar com backend real)
    if (isLogin) {
      // Verificar se usuário existe no localStorage
      const savedUser = localStorage.getItem("authUser");
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.email === formData.email && user.password === formData.password) {
          onAuthComplete({ email: user.email, name: user.name });
        } else {
          setErrors({ email: "Email ou senha incorretos" });
        }
      } else {
        setErrors({ email: "Usuário não encontrado. Faça o cadastro primeiro." });
      }
    } else {
      // Cadastrar novo usuário
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      localStorage.setItem("authUser", JSON.stringify(newUser));
      onAuthComplete({ email: newUser.email, name: newUser.name });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl mb-4">
            <Baby className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            MamãeCare
          </h1>
          <p className="text-gray-600">
            {isLogin ? "Bem-vinda de volta!" : "Crie sua conta e comece sua jornada"}
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Toggle Login/Cadastro */}
          <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-2xl">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setErrors({});
              }}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isLogin
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setErrors({});
              }}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isLogin
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Cadastrar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome (apenas no cadastro) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                      errors.name
                        ? "border-red-500 focus:border-red-600"
                        : "border-gray-200 focus:border-pink-500"
                    }`}
                    placeholder="Seu nome completo"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                    errors.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-200 focus:border-pink-500"
                  }`}
                  placeholder="seu@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                    errors.password
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-200 focus:border-pink-500"
                  }`}
                  placeholder="Mínimo 6 caracteres"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirmar Senha (apenas no cadastro) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPassword: e.target.value })
                    }
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                      errors.confirmPassword
                        ? "border-red-500 focus:border-red-600"
                        : "border-gray-200 focus:border-pink-500"
                    }`}
                    placeholder="Repita sua senha"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Botão Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-6"
            >
              {isLogin ? "Entrar" : "Criar Conta"}
            </button>
          </form>

          {/* Link Esqueci Senha (apenas no login) */}
          {isLogin && (
            <div className="text-center mt-4">
              <button
                type="button"
                className="text-sm text-purple-600 hover:text-purple-700 font-semibold"
              >
                Esqueci minha senha
              </button>
            </div>
          )}
        </div>

        {/* Aviso de Privacidade */}
        <p className="text-center text-xs text-gray-600 mt-6 px-4">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </div>
    </div>
  );
}
