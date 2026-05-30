import { Routes, Route, Link } from 'react-router-dom'
import { Heart, Activity, Calendar, Users, Shield, Smartphone, Star, ArrowRight, Frown, Baby, Sparkles } from 'lucide-react'
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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Você Não Precisa Viver com Essa
              <span className="text-gradient"> Dor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sabemos como é difícil acordar todos os dias com as pernas pesadas, com dor constante, e sentir que seu corpo não te deixa viver plenamente. 
              O LipedemaCare está aqui para transformar essa realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Imagem Central */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <img src="/fotos/1.png" alt="LipedemaCare" className="w-full rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* Seção Emocional - Impacto no Dia a Dia */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quando a Dor Te Impede de Viver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Você sabe exatamente como é sentir que seu corpo te trai quando mais precisa
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-500">
              <Baby className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Não Consegue Brincar com Seus Filhos ou Netos?</h3>
              <p className="text-gray-600 mb-4">
                Aquele momento em que seu filho ou neto pede para você brincar, e você precisa dizer não porque as pernas doem demais. 
                A culpa de não poder participar dos momentos mais importantes da infância deles. 
                O sentimento de estar perdendo tempo precioso que nunca volta.
              </p>
              <img src="/fotos/MulherNaoConsegueBrincarComFilhoseNetos.png" alt="Mulher não consegue brincar com filhos e netos" className="rounded-xl w-full" />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <Frown className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sente Que Seu Corpo Não é Mais Seu?</h3>
              <p className="text-gray-600 mb-4">
                Olhar no espelho e não se reconhecer. As roupas que não servem mais. 
                O desconforto constante que te lembra a cada momento que algo está errado. 
                A sensação de estar presa em um corpo que não te deixa ser quem você realmente é.
              </p>
              <img src="/fotos/MulherSenteQueOCorpoNaoEMaisDela.png" alt="Mulher sente que o corpo não é mais dela" className="rounded-xl w-full" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Você Não Está Sozinha Nessa Luta
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
              Milhões de mulheres passam exatamente pelo que você está passando agora. 
              Mas a diferença é que você não precisa aceitar isso como sua realidade definitiva.
            </p>
            <Link to="/projeto" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Quero Recuperar Minha Vida
            </Link>
          </div>
        </div>
      </section>

      {/* Seção - Dor Física e Limitações */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Dor Que Ninguém Vê, Mas Você Sente Todos os Dias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lipedema não é apenas estético - é uma condição que afeta cada aspecto da sua vida
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dor Constante</h3>
              <p className="text-gray-600">
                A dor que não vai embora, que te acompanha desde o momento em que você acorda até dormir. 
                Que te impede de fazer as coisas mais simples do dia a dia.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sensação de Peso</h3>
              <p className="text-gray-600">
                Sentir que suas pernas pesam toneladas, como se estivessem carregando o mundo. 
                A dificuldade de se mover, de caminhar, de fazer qualquer coisa que exija esforço.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Impacto Emocional</h3>
              <p className="text-gray-600">
                A depressão, a ansiedade, a baixa autoestima. 
                O sentimento de isolamento, como se ninguém realmente entendesse o que você passa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção - Profissional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Conheça Sua Especialista
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carina Silva - Fisioterapeuta especializada em saúde da mulher
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/fotos/CarinaSilva.png" alt="Carina Silva" className="w-full rounded-3xl shadow-xl" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre Carina Silva</h3>
                <p className="text-gray-600 mb-4">
                  Carina Silva é fisioterapeuta formada com especialização em saúde da mulher. 
                  Há 5 anos, ela dedica sua carreira ao estudo e tratamento de condições que afetam 
                  milhares de mulheres, com foco especial em lipedema, celulite e bem-estar corporal.
                </p>
                <p className="text-gray-600">
                  Sua abordagem combina conhecimento técnico avançado com uma visão empática e acolhedora, 
                  entendendo que cada mulher é única e merece um tratamento personalizado que respeite 
                  sua história e suas necessidades.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-primary-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Formação</h4>
                  <p className="text-sm text-gray-600">Fisioterapia</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <Activity className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Especialidades</h4>
                  <p className="text-sm text-gray-600">Lipedema, Celulite</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-pink-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Foco</h4>
                  <p className="text-sm text-gray-600">Saúde da Mulher</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Atendimento</h4>
                  <p className="text-sm text-gray-600">Personalizado</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-6 rounded-2xl text-white">
                <p className="text-lg font-semibold mb-2">
                  "Estou aqui para te acompanhar nessa jornada de transformação e autocuidado."
                </p>
                <p className="text-white/90">- Carina Silva</p>
              </div>

              <div className="text-center">
                <Link to="/projeto" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-purple-700 transition-colors">
                  <Sparkles className="w-5 h-5" />
                  Começar Minha Jornada com Carina
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção - Esperança e Transformação */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Existe Um Caminho de Volta para Você
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O LipedemaCare foi criado por mulheres que entendem exatamente o que você está passando
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/fotos/ExisteUmCaminhoDeVoltaParaVoce.png" alt="Existe um caminho de volta para você" className="rounded-3xl shadow-xl w-full" />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Redução da Dor e Inchaço</h3>
                  <p className="text-gray-600">
                    Com as técnicas certas de drenagem linfática e exercícios adaptados, 
                    você pode sentir alívio real e duradouro dos sintomas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Recupere Sua Mobilidade</h3>
                  <p className="text-gray-600">
                    Volte a fazer as coisas que você amava. Caminhar, brincar, se movimentar livremente 
                    sem a constante dor te limitando.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comunidade Que Entende</h3>
                  <p className="text-gray-600">
                    Conecte-se com outras mulheres que vivem a mesma realidade. 
                    Compartilhe experiências, receba apoio e nunca mais se sinta sozinha.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Recupere Sua Autoestima</h3>
                  <p className="text-gray-600">
                    Aprenda a se amar novamente, aceitar seu corpo e focar no que realmente importa: 
                    sua saúde e seu bem-estar.
                  </p>
                </div>
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
              <img src="/assets/2.png" alt="Entendendo o Lipedema" className="rounded-3xl shadow-xl w-full" />
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
          <div className="text-center">
            <Link to="/projeto" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-purple-700 transition-colors">
              <Sparkles className="w-5 h-5" />
              Quero Aprender Mais Sobre Lipedema
            </Link>
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
              <img src="/fotos/3.png" alt="Acompanhamento" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Acompanhamento Diário</h3>
              <p className="text-gray-600 text-sm">
                Registre seus sintomas, progresso e atividades diárias para identificar padrões e melhorias.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/fotos/4.png" alt="Exercícios" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Activity className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Exercícios Guiados</h3>
              <p className="text-gray-600 text-sm">
                Programas de exercícios específicos para lipedema, com vídeos e instruções passo a passo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/fotos/5.png" alt="Monitoramento" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Monitoramento de Saúde</h3>
              <p className="text-gray-600 text-sm">
                Acompanhe métricas importantes como circunferência, peso e níveis de dor ao longo do tempo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/fotos/6.png" alt="Comunidade" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Comunidade de Apoio</h3>
              <p className="text-gray-600 text-sm">
                Conecte-se com outras pessoas que enfrentam os mesmos desafios e compartilhe experiências.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/fotos/7.png" alt="Educação" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Educação Continuada</h3>
              <p className="text-gray-600 text-sm">
                Acesso a artigos, vídeos e recursos atualizados sobre lipedema e tratamentos disponíveis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="/fotos/8.png" alt="Lembretes" className="w-full aspect-square object-contain rounded-xl mb-4 bg-gray-50" />
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

      {/* CTA antes dos Depoimentos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pronta para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a milhares de mulheres que decidiram recuperar sua saúde e bem-estar
          </p>
          <Link to="/projeto" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-purple-700 transition-colors">
            <Sparkles className="w-5 h-5" />
            Quero Começar Minha Transformação
          </Link>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mulheres Que Recuperaram Sua Vida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de transformação e esperança
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img src="/assets/1.png" alt="Maria Clara" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "Há 6 meses, eu não conseguia brincar com meus netos. A dor era insuportável. 
                Hoje, consigo correr com eles no parque. O LipedemaCare me devolveu a alegria de viver."
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Maria Clara</p>
                <p className="text-sm text-gray-500">Avó de 3 netos, 52 anos</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img src="/assets/3.jpg" alt="Ana Silva" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "Eu achava que nunca mais ia me sentir bem no meu corpo. A depressão estava me consumindo. 
                Com o LipedemaCare, encontrei esperança e uma comunidade que realmente entende minha dor."
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Ana Silva</p>
                <p className="text-sm text-gray-500">Mãe de 2 filhos, 38 anos</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img src="/assets/5.jfif" alt="Patricia Oliveira" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "Depois de anos sofrendo em silêncio, finalmente encontrei um lugar onde não me sinto julgada. 
                Os exercícios adaptados mudaram minha vida - sinto menos dor e mais disposição para tudo."
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Patricia Oliveira</p>
                <p className="text-sm text-gray-500">Professora, 45 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Você Merece Viver Sem Dor
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Não deixe o lipedema definir quem você é. Junte-se a milhares de mulheres que decidiram recuperar sua vida e sua alegria.
          </p>
          <Link to="/projeto" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto">
            Quero Começar Minha Transformação
            <ArrowRight className="w-5 h-5" />
          </Link>
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
