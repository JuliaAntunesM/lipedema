import { Routes, Route, Link } from 'react-router-dom'
import { Heart, Activity, Calendar, Users, Shield, Smartphone, Star, ArrowRight } from 'lucide-react'
import Projeto from './pages/Projeto'

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">LipedemaCare</span>
          </div>
          <Link to="/projeto" className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition-colors">
            Acessar Sistema
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transforme Sua Vida com o
                <span className="text-gradient"> LipedemaCare</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubra como nosso aplicativo revolucionário pode ajudar você a gerenciar o lipedema, 
                aliviar sintomas e recuperar sua qualidade de vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/projeto" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Começar Agora
                </Link>
                <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl shadow-2xl w-full max-w-lg mx-auto p-12 flex items-center justify-center">
                <Heart className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white p-4 rounded-2xl shadow-lg hidden sm:block">
                <p className="font-bold text-lg">+10.000</p>
                <p className="text-sm">Usuárias ativas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é Lipedema */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O Que é Lipedema?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma condição crônica que afeta milhões de mulheres, caracterizada pelo acúmulo anormal de gordura
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img src="/lipedema/assets/2.png" alt="Entendendo o Lipedema" className="rounded-3xl shadow-xl w-full" />
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-primary-50 p-6 rounded-2xl">
                <Activity className="w-10 h-10 text-primary-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sintomas</h3>
                <p className="text-gray-600">
                  Inchaço nas pernas e braços, dor ao toque, sensação de peso e facilidade em formar hematomas.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-2xl">
                <Users className="w-10 h-10 text-primary-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quem Atinge</h3>
                <p className="text-gray-600">
                  Atinge principalmente mulheres, estimando que 11% da população feminina mundial sofra com a condição.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-2xl">
                <Shield className="w-10 h-10 text-primary-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tratamento</h3>
                <p className="text-gray-600">
                  Não tem cura, mas pode ser gerenciado com tratamento adequado, mudanças no estilo de vida e acompanhamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do App */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefícios do Nosso Aplicativo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas poderosas para ajudar você no dia a dia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/lipedema/assets/3.png" alt="Acompanhamento" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Acompanhamento Diário</h3>
              <p className="text-gray-600 text-sm">
                Registre seus sintomas, progresso e atividades diárias para identificar padrões e melhorias.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/lipedema/assets/4.png" alt="Exercícios" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Activity className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Exercícios Guiados</h3>
              <p className="text-gray-600 text-sm">
                Programas de exercícios específicos para lipedema, com vídeos e instruções passo a passo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/lipedema/assets/5.png" alt="Monitoramento" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Monitoramento de Saúde</h3>
              <p className="text-gray-600 text-sm">
                Acompanhe métricas importantes como circunferência, peso e níveis de dor ao longo do tempo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/lipedema/assets/6.png" alt="Comunidade" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Comunidade de Apoio</h3>
              <p className="text-gray-600 text-sm">
                Conecte-se com outras pessoas que enfrentam os mesmos desafios e compartilhe experiências.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/lipedema/assets/7.png" alt="Educação" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Educação Continuada</h3>
              <p className="text-gray-600 text-sm">
                Acesso a artigos, vídeos e recursos atualizados sobre lipedema e tratamentos disponíveis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/lipedema/assets/8.png" alt="Lembretes" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Smartphone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lembretes Inteligentes</h3>
              <p className="text-gray-600 text-sm">
                Receba notificações para medicamentos, consultas, exercícios e autocuidado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossas Usuárias Dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img src="/lipedema/assets/1.png" alt="Maria Clara" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "O LipedemaCare mudou minha vida. Finalmente consigo acompanhar meu progresso e me sentir mais no controle da minha condição."
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Maria Clara</p>
                <p className="text-sm text-gray-500">Usuária há 6 meses</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img src="/lipedema/assets/3.jpg" alt="Ana Silva" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "Os exercícios guiados são incríveis! Sinto menos dor e mais disposição no dia a dia. Recomendo para todas as mulheres com lipedema."
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Ana Silva</p>
                <p className="text-sm text-gray-500">Usuária há 1 ano</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img src="/lipedema/assets/5.jfif" alt="Patricia Oliveira" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "A comunidade de apoio é fantástica. Não me sinto mais sozima nessa jornada. O app é essencial para meu autocuidado."
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Patricia Oliveira</p>
                <p className="text-sm text-gray-500">Usuária há 8 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comece Sua Jornada Hoje
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de mulheres que já transformaram suas vidas com o LipedemaCare
          </p>
          <Link to="/projeto" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto">
            Baixar Gratuitamente
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/80 mt-4 text-sm">
            Disponível para iOS e Android
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold">LipedemaCare</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da tecnologia e do apoio comunitário.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Depoimentos</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Comunidade</li>
                <li>Suporte</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Termos de Uso</li>
                <li>Privacidade</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LipedemaCare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/projeto" element={<Projeto />} />
    </Routes>
  )
}

export default App
