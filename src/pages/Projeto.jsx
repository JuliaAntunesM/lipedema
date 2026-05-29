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

  // Animar gráficos quando estiver em loading
  useEffect(() => {
    if (currentStep === 'loading') {
      const peso = parseFloat(formData.peso) || 70
      const altura = parseFloat(formData.altura) || 165
      const nivelDor = parseInt(formData.nivelDor) || 5
      const dataNasc = formData.dataNascimento || '1990-01-01'
      
      // Calcular idade aproximada
      const idade = new Date().getFullYear() - new Date(dataNasc).getFullYear()
      
      // Calcular percentual de gordura aproximado (simplificado)
      const gorduraPercent = Math.min(40, Math.max(15, (peso / (altura * altura)) * 1000))
      
      // Animar gordura
      let gorduraValue = 0
      const gorduraInterval = setInterval(() => {
        gorduraValue += 1
        const gorduraEl = document.getElementById('gordura-percent')
        const gorduraBar = document.getElementById('gordura-bar')
        if (gorduraEl) gorduraEl.textContent = gorduraValue + '%'
        if (gorduraBar) gorduraBar.style.width = (gorduraValue / 40 * 100) + '%'
        if (gorduraValue >= gorduraPercent) clearInterval(gorduraInterval)
      }, 50)
      
      // Animar idade
      let idadeValue = 0
      const idadeInterval = setInterval(() => {
        idadeValue += 1
        const idadeEl = document.getElementById('idade-analise')
        const idadeBar = document.getElementById('idade-bar')
        if (idadeEl) idadeEl.textContent = idadeValue
        if (idadeBar) idadeBar.style.width = (idadeValue / 80 * 100) + '%'
        if (idadeValue >= idade) clearInterval(idadeInterval)
      }, 50)
      
      // Animar dor
      let dorValue = 0
      const dorInterval = setInterval(() => {
        dorValue += 1
        const dorEl = document.getElementById('dor-nivel')
        const dorBar = document.getElementById('dor-bar')
        if (dorEl) dorEl.textContent = dorValue
        if (dorBar) dorBar.style.width = (dorValue / 10 * 100) + '%'
        if (dorValue >= nivelDor) clearInterval(dorInterval)
      }, 50)
      
      // Mudar status após animação
      setTimeout(() => {
        const statusEl = document.getElementById('plano-status')
        if (statusEl) statusEl.textContent = 'Plano Gerado!'
      }, 2000)
      
      return () => {
        clearInterval(gorduraInterval)
        clearInterval(idadeInterval)
        clearInterval(dorInterval)
      }
    }
  }, [currentStep, formData])

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
    
    // Simular tempo de processamento
    setTimeout(() => {
      const recs = generateRecommendations(formData)
      setRecommendations(recs)
      setIsGenerating(false)
      setCurrentStep('results')
      
      // Redirecionar automaticamente para checkout após 5 segundos
      setTimeout(() => {
        window.open('https://lastlink.com/p/C3B759A85/checkout-payment/', '_blank')
      }, 5000)
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
            <div className="text-center max-w-2xl mx-auto">
              <div className="relative mb-8">
                <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gerando Plano</h2>
              <p className="text-gray-600 text-lg mb-8">Analisando seus dados e criando recomendações exclusivas...</p>
              
              {/* Gráficos Animados */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-primary-600 mb-2" id="gordura-percent">0%</div>
                  <p className="text-gray-600 text-sm">Percentual de Gordura</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-primary-600 h-2 rounded-full transition-all duration-1000" id="gordura-bar" style={{width: '0%'}}></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-purple-600 mb-2" id="idade-analise">0</div>
                  <p className="text-gray-600 text-sm">Idade Analisada</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-purple-600 h-2 rounded-full transition-all duration-1000" id="idade-bar" style={{width: '0%'}}></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-pink-600 mb-2" id="dor-nivel">0</div>
                  <p className="text-gray-600 text-sm">Nível de Dor</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-pink-600 h-2 rounded-full transition-all duration-1000" id="dor-bar" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>

              <div className="text-green-600 font-semibold text-xl" id="plano-status">
                Calculando...
              </div>
            </div>
          </div>
        )}

        {/* Tela de Resultados Personalizados */}
        {currentStep === 'results' && recommendations && (
          <div className="space-y-8">
            {/* Header de Resultados */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Plano Gerado!</h2>
                <p className="text-white/90">Criado exclusivamente para {recommendations.nome}</p>
              </div>
            </div>

            {/* CTA com Carina Silva */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img src="/fotos/CarinaSilva.png" alt="Carina Silva" className="w-64 h-64 object-cover rounded-3xl mx-auto" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Faça sua Matrícula com a Profissional Carina Silva
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Garanta sua participação no programa Lipedema Care e receba acompanhamento 
                    personalizado da especialista em saúde da mulher.
                  </p>
                  <a
                    href="https://lastlink.com/p/C3B759A85/checkout-payment/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-purple-700 transition-colors"
                  >
                    <Sparkles className="w-5 h-5" />
                    Garantir Minha Vaga
                  </a>
                  <p className="text-sm text-gray-500 mt-4">
                    Você será redirecionado automaticamente em 5 segundos...
                  </p>
                </div>
              </div>
            </div>

            {/* Resumo do Plano */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Resumo do Seu Plano</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-primary-50 p-4 rounded-xl">
                  <Utensils className="w-6 h-6 text-primary-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Plano Alimentar</h4>
                  <p className="text-sm text-gray-600">{recommendations.dieta.nivel}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <Hand className="w-6 h-6 text-purple-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Protocolo de Massagem</h4>
                  <p className="text-sm text-gray-600">{recommendations.massagem.frequencia}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <Activity className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Plano de Exercícios</h4>
                  <p className="text-sm text-gray-600">{recommendations.exercicios.intensidade}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projeto
