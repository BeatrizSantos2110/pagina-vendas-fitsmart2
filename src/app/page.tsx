"use client"

import { Dumbbell, Video, Utensils, Flame, Droplets, Bell, CheckCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FitSmartLanding() {
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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              Acesse Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
