import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Activity, Calendar, Users, Shield, Smartphone, Save, CheckCircle, XCircle, Clock, Utensils, Hand, BookOpen, Sparkles, TrendingUp, Target, Zap, ChevronRight, Loader2 } from 'lucide-react'

function Projeto() {
  const [currentStep, setCurrentStep] = useState('form') // 'form', 'loading', 'results'
  const [showInfo, setShowInfo] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    peso: '',
    altura: '',
    nivelDor: '',
    sintomas: [],
    medicamentos: '',
    observacoes: ''
  })
  const [saved, setSaved] = useState(false)
  const [recommendations, setRecommendations] = useState(null)

  // Carregar dados do localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('lipedemaData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  // Salvar dados no localStorage
  const handleSave = () => {
    localStorage.setItem('lipedemaData', JSON.stringify(formData))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  // Gerar recomendações personalizadas
  const handleGenerate = () => {
    setIsGenerating(true)
    setCurrentStep('loading')
    localStorage.setItem('lipedemaData', JSON.stringify(formData))
    
    // Simular tempo de processamento e redirecionar para checkout
    setTimeout(() => {
      const recs = generateRecommendations(formData)
      setRecommendations(recs)
      setIsGenerating(false)
      // Redirecionar para checkout após gerar recomendações
      window.open('https://lastlink.com/p/C3B759A85/checkout-payment/', '_blank')
    }, 3000)
  }

  // Lógica de geração de recomendações
  const generateRecommendations = (data) => {
    const nivelDor = parseInt(data.nivelDor) || 0
    const sintomas = data.sintomas || []
    const peso = parseFloat(data.peso) || 0
    const altura = parseFloat(data.altura) || 0
    
    // Calcular IMC
    const alturaM = altura / 100
    const imc = peso > 0 && alturaM > 0 ? (peso / (alturaM * alturaM)).toFixed(1) : 0
    
    // Análise de sintomas
    const temInchaco = sintomas.includes('Inchaço nas pernas') || sintomas.includes('Inchaço nos braços')
    const temDor = sintomas.includes('Dor ao toque') || nivelDor > 3
    const temPeso = sintomas.includes('Sensação de peso')
    const temDificuldadeAndar = sintomas.includes('Dificuldade para caminhar')
    
    // Gerar recomendações de dieta
    let dietaRecomendada = {
      titulo: 'Plano Alimentar Personalizado',
      nivel: nivelDor > 5 ? 'Intensivo' : 'Moderado',
      alimentos: [],
      evitar: [],
      cardapio: []
    }
    
    if (temInchaco) {
      dietaRecomendada.alimentos.push('Alimentos diuréticos: pepino, melancia, abacaxi')
      dietaRecomendada.alimentos.push('Reduzir sódio para diminuir retenção')
    }
    
    if (temDor) {
      dietaRecomendada.alimentos.push('Alimentos anti-inflamatórios: cúrcuma, gengibre, berries')
      dietaRecomendada.alimentos.push('Ômega-3: salmão, sardinha, linhaça')
    }
    
    dietaRecomendada.alimentos.push('Hidratação: 2-3 litros de água por dia')
    dietaRecomendada.alimentos.push('Vegetais verdes escuros: espinafre, couve, brócolis')
    dietaRecomendada.evitar.push('Açúcar refinado e doces')
    dietaRecomendada.evitar.push('Alimentos processados')
    dietaRecomendada.evitar.push('Excesso de sal')
    
    // Gerar recomendações de massagem
    let massagemRecomendada = {
      titulo: 'Protocolo de Massagem Personalizado',
      frequencia: nivelDor > 5 ? '2x ao dia' : '1x ao dia',
      duracao: nivelDor > 5 ? '20 minutos' : '15 minutos',
      tecnicas: [],
      areasFoco: []
    }
    
    if (temInchaco) {
      massagemRecomendada.tecnicas.push('Drenagem linfática manual')
      massagemRecomendada.areasFoco.push('Pernas: do tornozelo até o quadril')
    }
    
    if (sintomas.includes('Inchaço nos braços')) {
      massagemRecomendada.tecnicas.push('Automassagem nos braços')
      massagemRecomendada.areasFoco.push('Braços: do punho até o ombro')
    }
    
    if (temDor) {
      massagemRecomendada.tecnicas.push('Massagem suave com óleo')
      massagemRecomendada.tecnicas.push('Evitar pressão em áreas doloridas')
    }
    
    massagemRecomendada.tecnicas.push('Movimentos circulares suaves')
    massagemRecomendada.tecnicas.push('Sempre de baixo para cima')
    
    // Gerar recomendações de exercícios
    let exerciciosRecomendados = {
      titulo: 'Plano de Exercícios Personalizado',
      intensidade: temDificuldadeAndar ? 'Baixa' : 'Moderada',
      atividades: [],
      duracao: '30 minutos diários'
    }
    
    if (temDificuldadeAndar) {
      exerciciosRecomendados.atividades.push('Exercícios na água: hidroginástica')
      exerciciosRecomendados.atividades.push('Yoga adaptado')
      exerciciosRecomendados.atividades.push('Alongamentos suaves')
    } else {
      exerciciosRecomendados.atividades.push('Caminhada leve: 20-30 minutos')
      exerciciosRecomendados.atividades.push('Natação')
      exerciciosRecomendados.atividades.push('Pilates')
    }
    
    exerciciosRecomendados.atividades.push('Elevação de pernas: 10 minutos ao dia')
    
    // Pontuação de saúde
    const pontuacaoSaude = {
      imc: imc,
      nivelDor: nivelDor,
      numSintomas: sintomas.length,
      status: nivelDor > 7 ? 'Atenção' : nivelDor > 4 ? 'Moderado' : 'Bom'
    }
    
    return {
      dieta: dietaRecomendada,
      massagem: massagemRecomendada,
      exercicios: exerciciosRecomendados,
      pontuacao: pontuacaoSaude,
      nome: data.nome || 'Usuária'
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSymptomToggle = (symptom) => {
    setFormData(prev => ({
      ...prev,
      sintomas: prev.sintomas.includes(symptom)
        ? prev.sintomas.filter(s => s !== symptom)
        : [...prev.sintomas, symptom]
    }))
  }

  const sintomasList = [
    'Inchaço nas pernas',
    'Inchaço nos braços',
    'Dor ao toque',
    'Sensação de peso',
    'Facilidade em formar hematomas',
    'Dificuldade para caminhar',
    'Fadiga',
    'Dificuldade para encontrar roupas'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">LipedemaCare</span>
            </div>
            <div className="flex gap-3">
              {currentStep !== 'form' && (
                <button
                  onClick={() => setCurrentStep('form')}
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Editar Dados
                </button>
              )}
              <Link to="/" className="text-primary-600 hover:text-primary-700 font-semibold">
                Voltar para Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Formulário */}
        {currentStep === 'form' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Crie seu Plano Personalizado</h1>
              <p className="text-xl text-gray-600">
                Preencha seus dados de saúde para receber recomendações exclusivas de dieta, massagem e exercícios
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Seus Dados de Saúde</h2>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 px-3 sm:px-4 py-2 rounded-full font-semibold hover:from-primary-200 hover:to-purple-200 transition-all text-xs sm:text-sm"
                >
                  <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                  Salvar
                </button>
              </div>

              {saved && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Dados salvos com sucesso!</span>
                </div>
              )}

              <form className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gradient-to-br from-gray-50 to-white transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Data de Nascimento</label>
                    <input
                      type="date"
                      name="dataNascimento"
                      value={formData.dataNascimento}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gradient-to-br from-gray-50 to-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Peso (kg)</label>
                    <input
                      type="number"
                      name="peso"
                      value={formData.peso}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gradient-to-br from-gray-50 to-white transition-all"
                      placeholder="Ex: 70"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Altura (cm)</label>
                    <input
                      type="number"
                      name="altura"
                      value={formData.altura}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gradient-to-br from-gray-50 to-white transition-all"
                      placeholder="Ex: 165"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 p-4 sm:p-5 rounded-2xl border-2 border-red-100">
                  <label className="block text-sm sm:text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">😣</span>
                    Nível de Dor
                  </label>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">0</span>
                    <input
                      type="range"
                      name="nivelDor"
                      min="0"
                      max="10"
                      value={formData.nivelDor}
                      onChange={handleChange}
                      className="flex-1 h-3 bg-white rounded-full appearance-none cursor-pointer shadow-inner"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #f59e0b 50%, #ef4444 100%)`
                      }}
                    />
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">10</span>
                    <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg transition-all ${
                      formData.nivelDor > 7 ? 'bg-red-500 text-white' :
                      formData.nivelDor > 4 ? 'bg-orange-500 text-white' :
                      formData.nivelDor > 0 ? 'bg-yellow-500 text-white' :
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {formData.nivelDor || 0}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center font-medium">Arraste para indicar seu nível de dor atual</p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary-600" />
                    Quais sintomas você sente?
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {sintomasList.map((sintoma) => {
                      const isDor = sintoma.includes('Dor') || sintoma.includes('Fadiga')
                      const isInchaco = sintoma.includes('Inchaço') || sintoma.includes('roupas')
                      const isAmarelo = sintoma.includes('caminhar') || sintoma.includes('hematomas')
                      const isSelected = formData.sintomas.includes(sintoma)
                      
                      return (
                        <label
                          key={sintoma}
                          className={`flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-all text-center text-xs sm:text-sm font-medium ${
                            isSelected
                              ? isDor
                                ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-200 scale-105'
                                : isInchaco
                                  ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200 scale-105'
                                  : isAmarelo
                                    ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-200 scale-105'
                                    : 'bg-gradient-to-br from-primary-500 to-purple-600 text-white shadow-lg shadow-purple-200 scale-105'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleSymptomToggle(sintoma)}
                            className="hidden"
                          />
                          <span className="leading-tight">{sintoma}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Medicamentos (opcional)</label>
                  <textarea
                    name="medicamentos"
                    value={formData.medicamentos}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gradient-to-br from-gray-50 to-white transition-all text-sm resize-none"
                    placeholder="Liste seus medicamentos..."
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Observações (opcional)</label>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gradient-to-br from-gray-50 to-white transition-all text-sm resize-none"
                    placeholder="Outras informações..."
                  />
                </div>
              </form>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200">
                <button
                  onClick={handleGenerate}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:from-primary-700 hover:via-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  Gerar Meu Plano Personalizado
                </button>
              </div>
            </div>

            {/* Informações adicionais (colapsável) */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                  Saiba mais sobre Lipedema
                </h3>
                <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${showInfo ? 'rotate-90' : ''}`} />
              </button>
              
              {showInfo && (
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">O Que é Lipedema?</h4>
                    <p className="text-gray-600">
                      O lipedema é uma doença crônica do tecido adiposo que afeta principalmente mulheres. 
                      Caracteriza-se pelo acúmulo anormal de gordura nas pernas, braços e, às vezes, nos quadris, 
                      causando dor, inchaço e sensibilidade ao toque.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary-50 p-4 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-2">Sintomas</h5>
                      <p className="text-gray-600 text-sm">Inchaço, dor, sensação de peso, hematomas fáceis</p>
                    </div>
                    <div className="bg-primary-50 p-4 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-2">Tratamentos</h5>
                      <p className="text-gray-600 text-sm">Drenagem linfática, compressão, exercícios, dieta</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Loading */}
        {currentStep === 'loading' && (
          <div className="flex items-center justify-center min-h-[600px]">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-primary-600 to-purple-600 rounded-full p-8">
                  <Loader2 className="w-16 h-16 text-white animate-spin" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gerando seu Plano Personalizado</h2>
              <p className="text-gray-600 text-lg mb-8">Analisando seus dados e criando recomendações exclusivas...</p>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-gray-600">
                  <Sparkles className="w-5 h-5 text-green-500" />
                  <span>Gerando receitas personalizadas...</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  <span>Criando treinos personalizados...</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span>Preparando protocolo de massagem...</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                  <span>Finalizando seu plano...</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tela de Resultados Personalizados */}
        {currentStep === 'results' && recommendations && (
          <div className="space-y-8">
            {/* Header de Resultados */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Seu Plano Personalizado</h2>
                  <p className="text-white/90">Criado exclusivamente para {recommendations.nome}</p>
                </div>
                <button
                  onClick={() => setCurrentStep('form')}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Editar Dados
                </button>
              </div>
              
              {/* Pontuação de Saúde */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5" />
                    <span className="text-sm font-semibold">IMC</span>
                  </div>
                  <p className="text-2xl font-bold">{recommendations.pontuacao.imc}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-semibold">Nível de Dor</span>
                  </div>
                  <p className="text-2xl font-bold">{recommendations.pontuacao.nivelDor}/10</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5" />
                    <span className="text-sm font-semibold">Status</span>
                  </div>
                  <p className="text-2xl font-bold">{recommendations.pontuacao.status}</p>
                </div>
              </div>
            </div>

            {/* Recomendação de Dieta */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{recommendations.dieta.titulo}</h3>
                  <p className="text-gray-600">Nível: {recommendations.dieta.nivel}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Alimentos Recomendados
                  </h4>
                  <ul className="space-y-2">
                    {recommendations.dieta.alimentos.map((alimento, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        {alimento}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Alimentos a Evitar
                  </h4>
                  <ul className="space-y-2">
                    {recommendations.dieta.evitar.map((alimento, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                        {alimento}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recomendação de Massagem */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Hand className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{recommendations.massagem.titulo}</h3>
                  <p className="text-gray-600">{recommendations.massagem.frequencia} • {recommendations.massagem.duracao}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-purple-600 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Técnicas
                  </h4>
                  <ul className="space-y-2">
                    {recommendations.massagem.tecnicas.map((tecnica, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-1" />
                        {tecnica}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-600 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Áreas de Foco
                  </h4>
                  <ul className="space-y-2">
                    {recommendations.massagem.areasFoco.map((area, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-1" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recomendação de Exercícios */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{recommendations.exercicios.titulo}</h3>
                  <p className="text-gray-600">Intensidade: {recommendations.exercicios.intensidade} • {recommendations.exercicios.duracao}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Atividades Recomendadas
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.exercicios.atividades.map((atividade, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-700 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{atividade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentStep('form')}
                className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Editar Dados
              </button>
              <a
                href="https://lastlink.com/p/C3B759A85/checkout-payment/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:from-primary-700 hover:via-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5" />
                Ir para Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projeto
