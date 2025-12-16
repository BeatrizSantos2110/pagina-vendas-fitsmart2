"use client"

import { useState } from "react"
import { Dumbbell, Video, Utensils, Flame, Droplets, Bell, CheckCircle, ArrowRight, Star, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FitSmartLanding() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [quizData, setQuizData] = useState({
    goal: "",
    location: "",
    weight: "",
    height: "",
    diet: ""
  })
  const [showResults, setShowResults] = useState(false)
  const [bmi, setBmi] = useState(0)
  const [bmiCategory, setBmiCategory] = useState("")

  const handleStartQuiz = () => {
    setShowQuiz(true)
    setCurrentStep(0)
    setShowResults(false)
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateBMI()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateBMI = () => {
    const weightKg = parseFloat(quizData.weight)
    const heightM = parseFloat(quizData.height) / 100
    const calculatedBMI = weightKg / (heightM * heightM)
    setBmi(calculatedBMI)

    let category = ""
    if (calculatedBMI < 18.5) {
      category = "Abaixo do peso"
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      category = "Peso normal"
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      category = "Sobrepeso"
    } else if (calculatedBMI >= 30 && calculatedBMI < 35) {
      category = "Obesidade Grau I"
    } else if (calculatedBMI >= 35 && calculatedBMI < 40) {
      category = "Obesidade Grau II"
    } else {
      category = "Obesidade Grau III"
    }
    setBmiCategory(category)
    setShowResults(true)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return quizData.goal !== ""
      case 1:
        return quizData.location !== ""
      case 2:
        return quizData.weight !== "" && parseFloat(quizData.weight) > 0
      case 3:
        return quizData.height !== "" && parseFloat(quizData.height) > 0
      case 4:
        return quizData.diet !== ""
      default:
        return false
    }
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border border-emerald-500/30 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seus Resultados
              </h2>
              <p className="text-gray-400 text-lg">
                Analisamos suas informações e aqui está o que descobrimos
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-slate-950/50 p-6 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-2">Seu Objetivo</h3>
                <p className="text-gray-300 text-lg">{quizData.goal}</p>
              </div>

              <div className="bg-slate-950/50 p-6 rounded-2xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-white mb-2">Local de Treino</h3>
                <p className="text-gray-300 text-lg">{quizData.location}</p>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-2xl border border-orange-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Seu IMC (Índice de Massa Corporal)</h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                      {bmi.toFixed(1)}
                    </p>
                    <p className="text-gray-400 mt-2">IMC</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white mb-2">{bmiCategory}</p>
                  <p className="text-gray-400">
                    {bmi >= 30 
                      ? "Atenção! É importante cuidar da sua saúde. O FitSmart pode te ajudar a alcançar um peso saudável de forma segura e eficaz."
                      : bmi >= 25
                      ? "Você está acima do peso ideal. Com o FitSmart, você pode alcançar seus objetivos de forma saudável!"
                      : bmi < 18.5
                      ? "Você está abaixo do peso ideal. O FitSmart pode te ajudar a ganhar massa muscular de forma saudável!"
                      : "Parabéns! Você está no peso ideal. O FitSmart pode te ajudar a manter e melhorar ainda mais sua forma física!"}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para Transformar sua Vida?
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                O FitSmart vai criar um plano personalizado especialmente para você, com treinos adaptados ao seu objetivo e local de treino, além de um plano alimentar que respeita suas preferências!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-10 py-7 text-xl rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
                onClick={() => window.open('https://app-fitsmart-so97.vercel.app/', '_blank')}
              >
                Acesse o FitSmart Agora!
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                Comece sua jornada de transformação hoje mesmo!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border border-emerald-500/30 shadow-2xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Pergunta {currentStep + 1} de 5</span>
                <span className="text-gray-400 text-sm">{Math.round(((currentStep + 1) / 5) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question 1: Goal */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Qual é o seu objetivo principal?
                </h2>
                <div className="space-y-3">
                  {["Emagrecer", "Ganhar massa muscular", "Manter o peso", "Melhorar condicionamento físico"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setQuizData({ ...quizData, goal: option })}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        quizData.goal === option
                          ? "border-emerald-500 bg-emerald-500/10 text-white"
                          : "border-slate-700 hover:border-slate-600 text-gray-300"
                      }`}
                    >
                      <span className="font-semibold">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question 2: Location */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Onde você prefere treinar?
                </h2>
                <div className="space-y-3">
                  {["Academia", "Em casa", "Ambos"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setQuizData({ ...quizData, location: option })}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        quizData.location === option
                          ? "border-cyan-500 bg-cyan-500/10 text-white"
                          : "border-slate-700 hover:border-slate-600 text-gray-300"
                      }`}
                    >
                      <span className="font-semibold">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question 3: Weight */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Qual é o seu peso atual?
                </h2>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Ex: 75"
                      value={quizData.weight}
                      onChange={(e) => setQuizData({ ...quizData, weight: e.target.value })}
                      className="w-full p-4 rounded-xl border-2 border-slate-700 bg-slate-950/50 text-white text-lg focus:border-emerald-500 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                      kg
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Digite seu peso em quilogramas
                  </p>
                </div>
              </div>
            )}

            {/* Question 4: Height */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Qual é a sua altura?
                </h2>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Ex: 175"
                      value={quizData.height}
                      onChange={(e) => setQuizData({ ...quizData, height: e.target.value })}
                      className="w-full p-4 rounded-xl border-2 border-slate-700 bg-slate-950/50 text-white text-lg focus:border-cyan-500 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                      cm
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Digite sua altura em centímetros
                  </p>
                </div>
              </div>
            )}

            {/* Question 5: Diet */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Como você descreveria sua alimentação atual?
                </h2>
                <div className="space-y-3">
                  {[
                    "Muito saudável (como muitas frutas, verduras e proteínas)",
                    "Moderada (tento comer bem, mas às vezes exagero)",
                    "Precisa melhorar (como muito fast food e industrializados)",
                    "Tenho restrições alimentares (vegetariano, vegano, intolerâncias)"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setQuizData({ ...quizData, diet: option })}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        quizData.diet === option
                          ? "border-emerald-500 bg-emerald-500/10 text-white"
                          : "border-slate-700 hover:border-slate-600 text-gray-300"
                      }`}
                    >
                      <span className="font-semibold text-sm md:text-base">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 border-slate-700 hover:border-slate-600 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === 4 ? "Ver Resultados" : "Próximo"}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme Seu Estilo de Vida com o <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">FitSmart!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Você está pronto para dar o primeiro passo rumo a uma vida mais saudável e ativa? Com o FitSmart, esse sonho se torna realidade!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
                onClick={handleStartQuiz}
              >
                Fazer Quiz Personalizado
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://app-fitsmart-so97.vercel.app/', '_blank')}
              >
                Acesse Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
            O que o FitSmart oferece?
          </h2>
          <p className="text-center text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto">
            Nosso aplicativo foi desenvolvido para te ajudar a alcançar seus objetivos de forma fácil, prática e personalizada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Treinos Personalizados</h3>
              <p className="text-gray-400">
                Não importa onde você treina — seja na academia ou em casa — o FitSmart cria um plano de exercícios sob medida para você, respeitando seu nível e seus objetivos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vídeos de Execução</h3>
              <p className="text-gray-400">
                Cada treino vem acompanhado de vídeos explicativos, garantindo que você execute cada movimento da maneira certa e obtenha o máximo de resultados.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plano Alimentar Personalizado</h3>
              <p className="text-gray-400">
                Diga adeus às dietas genéricas. O FitSmart ajusta um plano alimentar de acordo com suas restrições e preferências, para que você possa se alimentar bem.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cálculo de Calorias Gastas</h3>
              <p className="text-gray-400">
                Após cada treino, você poderá selecionar os exercícios realizados e descobrir quantas calorias queimou. Isso te motiva e ajuda a manter o foco nos seus objetivos.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hidratação Eficiente</h3>
              <p className="text-gray-400">
                O FitSmart calcula sua meta diária de ingestão de água com base em seu peso. Você pode registrar o quanto bebeu durante o dia.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 md:col-span-2 lg:col-span-3">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Lembretes Motivacionais</h3>
                  <p className="text-gray-400">
                    Chega de esquecer de treinar, se alimentar ou se hidratar! O FitSmart envia lembretes para garantir que você permaneça no caminho certo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto">
            Veja como o FitSmart está transformando a vida de milhares de pessoas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Perdi 12kg em 3 meses! O FitSmart me ajudou a criar uma rotina saudável que realmente funciona. Os treinos personalizados e o controle alimentar fizeram toda a diferença."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <p className="text-white font-semibold">Maria Clara</p>
                  <p className="text-gray-400 text-sm">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Finalmente consegui ganhar massa muscular! Os vídeos explicativos são perfeitos e me ajudaram a executar os exercícios corretamente. Recomendo demais!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div>
                  <p className="text-white font-semibold">Rafael Santos</p>
                  <p className="text-gray-400 text-sm">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Como mãe de dois filhos, achei que nunca teria tempo para cuidar de mim. O FitSmart me mostrou que é possível treinar em casa e ter resultados incríveis!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  JA
                </div>
                <div>
                  <p className="text-white font-semibold">Juliana Almeida</p>
                  <p className="text-gray-400 text-sm">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "O controle de calorias com fotos é genial! Nunca foi tão fácil acompanhar minha alimentação. Estou mais saudável e com muito mais energia."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  PC
                </div>
                <div>
                  <p className="text-white font-semibold">Pedro Costa</p>
                  <p className="text-gray-400 text-sm">Curitiba, PR</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Os lembretes me salvam! Sempre esqueço de beber água, mas agora o FitSmart me lembra e consigo bater minha meta todos os dias. Mudou minha vida!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div>
                  <p className="text-white font-semibold">Ana Silva</p>
                  <p className="text-gray-400 text-sm">Brasília, DF</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Melhor investimento que fiz na minha saúde! O plano alimentar personalizado respeita minhas restrições e ainda assim é delicioso. Estou adorando!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  LO
                </div>
                <div>
                  <p className="text-white font-semibold">Lucas Oliveira</p>
                  <p className="text-gray-400 text-sm">Porto Alegre, RS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16">
            Como Funciona?
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 md:p-8 rounded-2xl border border-emerald-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Cadastro Rápido</h3>
                <p className="text-gray-400">
                  Responda ao nosso quiz e receba um plano de treinos e alimentação totalmente adaptado a você.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 md:p-8 rounded-2xl border border-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Escolha seu Treino</h3>
                <p className="text-gray-400">
                  Treine onde quiser e com a segurança de que está fazendo tudo corretamente.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 md:p-8 rounded-2xl border border-emerald-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Registre suas Refeições e Treinos</h3>
                <p className="text-gray-400">
                  Controle o que come e quanto se exercita, tudo na palma da sua mão.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 md:p-8 rounded-2xl border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Beba Água e Adeque-se ao Seu Estilo de Vida</h3>
                <p className="text-gray-400">
                  Não deixe que a desidratação atrapalhe seus resultados!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Chegou a Hora de Mudar!
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transforme sua rotina com o FitSmart e descubra como é fácil alcançar seus objetivos de saúde e bem-estar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <span className="text-gray-300">Assistente pessoal de treinos e nutrição</span>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-10 py-7 text-xl rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 mb-4"
              onClick={() => window.open('https://app-fitsmart-so97.vercel.app/', '_blank')}
            >
              Acesse Agora e Comece sua Jornada!
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <p className="text-gray-400 text-lg">
              Dê o primeiro passo para a vida que você sempre sonhou!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2024 FitSmart. Sua saúde e seu corpo agradecem!
          </p>
        </div>
      </footer>
    </div>
  )
}
