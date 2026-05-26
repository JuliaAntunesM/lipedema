import { useState, useEffect } from 'react'
import { Heart, Activity, Calendar, Users, Shield, Smartphone, Save, CheckCircle, XCircle, Clock, Utensils, Hand, BookOpen } from 'lucide-react'

function Projeto() {
  const [activeTab, setActiveTab] = useState('informacoes')
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    peso: '',
    altura: '',
    circunferenciaPernaDireita: '',
    circunferenciaPernaEsquerda: '',
    circunferenciaBracoDireito: '',
    circunferenciaBracoEsquerdo: '',
    nivelDor: '',
    sintomas: [],
    medicamentos: '',
    observacoes: ''
  })
  const [saved, setSaved] = useState(false)

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
            <a href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
              Voltar para Home
            </a>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-4">
            <button
              onClick={() => setActiveTab('informacoes')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'informacoes'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Informações
            </button>
            <button
              onClick={() => setActiveTab('massagens')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'massagens'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Hand className="w-4 h-4 inline mr-2" />
              Massagens
            </button>
            <button
              onClick={() => setActiveTab('dietas')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'dietas'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Utensils className="w-4 h-4 inline mr-2" />
              Dietas
            </button>
            <button
              onClick={() => setActiveTab('formulario')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'formulario'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              Meu Registro
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Informações sobre Lipedema */}
        {activeTab === 'informacoes' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">O Que é Lipedema?</h2>
              <p className="text-gray-600 mb-6 text-lg">
                O lipedema é uma doença crônica do tecido adiposo que afeta principalmente mulheres. 
                Caracteriza-se pelo acúmulo anormal de gordura nas pernas, braços e, às vezes, nos quadris, 
                causando dor, inchaço e sensibilidade ao toque.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-xl">
                  <Activity className="w-8 h-8 text-primary-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Sintomas Principais</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Inchaço simétrico nas pernas/braços</li>
                    <li>• Dor e sensibilidade ao toque</li>
                    <li>• Sensação de peso nas extremidades</li>
                    <li>• Facilidade em formar hematomas</li>
                    <li>• Pele com aspecto de "casca de laranja"</li>
                  </ul>
                </div>
                <div className="bg-primary-50 p-6 rounded-xl">
                  <Shield className="w-8 h-8 text-primary-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Tratamentos Disponíveis</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Drenagem linfática manual</li>
                    <li>• Compressão elástica</li>
                    <li>• Exercícios físicos específicos</li>
                    <li>• Alimentação anti-inflamatória</li>
                    <li>• Liposucção em casos avançados</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Estatísticas Importantes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl text-white">
                  <p className="text-4xl font-bold mb-2">11%</p>
                  <p className="text-white/90">Das mulheres sofrem com lipedema</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl text-white">
                  <p className="text-4xl font-bold mb-2">10+</p>
                  <p className="text-white/90">Anos em média para diagnóstico</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl text-white">
                  <p className="text-4xl font-bold mb-2">90%</p>
                  <p className="text-white/90">Dos casos são em mulheres</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dicas do Dia a Dia</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Use roupas confortáveis</h4>
                    <p className="text-gray-600">Evite roupas apertadas que dificultem a circulação.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Mantenha-se hidratada</h4>
                    <p className="text-gray-600">Beba pelo menos 2 litros de água por dia.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Evite ficar muito tempo em pé</h4>
                    <p className="text-gray-600">Faça pausas para elevar as pernas quando possível.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Pratique exercícios leves</h4>
                    <p className="text-gray-600">Caminhada, natação e yoga são excelentes opções.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Massagens */}
        {activeTab === 'massagens' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Técnicas de Massagem para Lipedema</h2>
              <p className="text-gray-600 mb-8 text-lg">
                As massagens podem ajudar a aliviar o inchaço, melhorar a circulação e reduzir a dor. 
                Sempre consulte um fisioterapeuta especializado antes de iniciar qualquer tratamento.
              </p>

              <div className="space-y-8">
                <div className="border rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Drenagem Linfática Manual</h3>
                    <p className="text-white/90">Técnica especializada que estimula o sistema linfático</p>
                  </div>
                  <div className="p-6">
                    <div className="aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Hand className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Imagem ilustrativa de drenagem linfática</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Como fazer:</h4>
                    <ol className="text-gray-600 space-y-2 list-decimal list-inside">
                      <li>Comece movendo suavemente as mãos do tornozelo em direção ao quadril</li>
                      <li>Use movimentos circulares e leves, sem pressionar demais</li>
                      <li>Trabalhe primeiro na parte de cima da perna, depois na parte de baixo</li>
                      <li>Repita por 10-15 minutos em cada perna</li>
                      <li>Termine elevando as pernas por 5-10 minutos</li>
                    </ol>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        <strong>Importante:</strong> Esta técnica deve ser aprendida com um profissional qualificado. 
                        Não substitui tratamento médico.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Automassagem</h3>
                    <p className="text-white/90">Técnica simples para fazer em casa</p>
                  </div>
                  <div className="p-6">
                    <div className="aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Hand className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Imagem ilustrativa de automassagem</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Passos:</h4>
                    <ol className="text-gray-600 space-y-2 list-decimal list-inside">
                      <li>Sente-se confortavelmente com as pernas esticadas</li>
                      <li>Use um óleo hidratante para facilitar os movimentos</li>
                      <li>Faça movimentos suaves de baixo para cima</li>
                      <li>Pressione levemente com as palmas das mãos</li>
                      <li>Evite áreas com dor intensa</li>
                    </ol>
                  </div>
                </div>

                <div className="border rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Massagem com Bola de Tenis</h3>
                    <p className="text-white/90">Técnica para alcançar áreas difíceis</p>
                  </div>
                  <div className="p-6">
                    <div className="aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Activity className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Imagem ilustrativa de massagem com bola</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Instruções:</h4>
                    <ol className="text-gray-600 space-y-2 list-decimal list-inside">
                      <li>Deite-se de barriga para cima</li>
                      <li>Coloque uma bola de tênis sob a coxa</li>
                      <li>Mova a perna levemente para rolar a bola</li>
                      <li>Faça isso por 2-3 minutos em cada área</li>
                      <li>Evite colocar peso direto sobre a bola</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dietas */}
        {activeTab === 'dietas' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Alimentação Anti-Inflamatória</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Uma alimentação adequada pode ajudar a reduzir a inflamação e os sintomas do lipedema. 
                Foco em alimentos naturais e anti-inflamatórios.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Alimentos Recomendados
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="aspect-video bg-green-100 rounded-lg mb-3 flex items-center justify-center">
                        <Utensils className="w-12 h-12 text-green-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Vegetais e Frutas</h4>
                      <p className="text-gray-600 text-sm">Brócolis, couve, espinafre, berries, cítricos</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="aspect-video bg-green-100 rounded-lg mb-3 flex items-center justify-center">
                        <Utensils className="w-12 h-12 text-green-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Peixes Gordos</h4>
                      <p className="text-gray-600 text-sm">Salmão, sardinha, atum (ricos em ômega-3)</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="aspect-video bg-green-100 rounded-lg mb-3 flex items-center justify-center">
                        <Utensils className="w-12 h-12 text-green-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Grãos Integrais</h4>
                      <p className="text-gray-600 text-sm">Quinoa, aveia, arroz integral</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="aspect-video bg-green-100 rounded-lg mb-3 flex items-center justify-center">
                        <Utensils className="w-12 h-12 text-green-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Sementes e Nozes</h4>
                      <p className="text-gray-600 text-sm">Linhaça, chia, castanhas, amêndoas</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Alimentos a Evitar
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="aspect-video bg-red-100 rounded-lg mb-3 flex items-center justify-center">
                        <XCircle className="w-12 h-12 text-red-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Açúcar e Doces</h4>
                      <p className="text-gray-600 text-sm">Aumentam inflamação e retenção de líquidos</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="aspect-video bg-red-100 rounded-lg mb-3 flex items-center justify-center">
                        <XCircle className="w-12 h-12 text-red-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Processados</h4>
                      <p className="text-gray-600 text-sm">Embutidos, fast food, alimentos industrializados</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="aspect-video bg-red-100 rounded-lg mb-3 flex items-center justify-center">
                        <XCircle className="w-12 h-12 text-red-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Frituras</h4>
                      <p className="text-gray-600 text-sm">Gorduras saturadas e trans</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="aspect-video bg-red-100 rounded-lg mb-3 flex items-center justify-center">
                        <XCircle className="w-12 h-12 text-red-400" />
                      </div>
                      <h4 className="font-bold text-gray-900">Excesso de Sal</h4>
                      <p className="text-gray-600 text-sm">Piora retenção de líquidos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Exemplo de Cardápio Diário</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-bold text-primary-600 mb-2">Café da Manhã</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Smoothie de frutas vermelhas</li>
                      <li>• Aveia com linhaça</li>
                      <li>• Chá verde</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-bold text-primary-600 mb-2">Almoço</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Salada verde variada</li>
                      <li>• Salmão grelhado</li>
                      <li>• Quinoa</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-bold text-primary-600 mb-2">Jantar</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Sopa de legumes</li>
                      <li>• Frango grelhado</li>
                      <li>• Vegetais no vapor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Formulário */}
        {activeTab === 'formulario' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Meu Registro de Saúde</h2>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Save className="w-5 h-5" />
                  Salvar
                </button>
              </div>

              {saved && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Dados salvos com sucesso!</span>
                </div>
              )}

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Data de Nascimento</label>
                    <input
                      type="date"
                      name="dataNascimento"
                      value={formData.dataNascimento}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Peso (kg)</label>
                    <input
                      type="number"
                      name="peso"
                      value={formData.peso}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Ex: 70"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Altura (cm)</label>
                    <input
                      type="number"
                      name="altura"
                      value={formData.altura}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Ex: 165"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary-600" />
                    Circunferências (cm)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Perna Direita</label>
                      <input
                        type="number"
                        name="circunferenciaPernaDireita"
                        value={formData.circunferenciaPernaDireita}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Ex: 55"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Perna Esquerda</label>
                      <input
                        type="number"
                        name="circunferenciaPernaEsquerda"
                        value={formData.circunferenciaPernaEsquerda}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Ex: 54"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Braço Direito</label>
                      <input
                        type="number"
                        name="circunferenciaBracoDireito"
                        value={formData.circunferenciaBracoDireito}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Ex: 30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Braço Esquerdo</label>
                      <input
                        type="number"
                        name="circunferenciaBracoEsquerdo"
                        value={formData.circunferenciaBracoEsquerdo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Ex: 29"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nível de Dor (0-10)</label>
                  <input
                    type="range"
                    name="nivelDor"
                    min="0"
                    max="10"
                    value={formData.nivelDor}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0 (Sem dor)</span>
                    <span className="font-bold text-primary-600">{formData.nivelDor || 0}</span>
                    <span>10 (Dor máxima)</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary-600" />
                    Sintomas Atuais
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {sintomasList.map((sintoma) => (
                      <label
                        key={sintoma}
                        className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors ${
                          formData.sintomas.includes(sintoma)
                            ? 'bg-primary-100 border-2 border-primary-500'
                            : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.sintomas.includes(sintoma)}
                          onChange={() => handleSymptomToggle(sintoma)}
                          className="w-5 h-5 text-primary-600 rounded"
                        />
                        <span className="text-gray-700">{sintoma}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Medicamentos em Uso</label>
                  <textarea
                    name="medicamentos"
                    value={formData.medicamentos}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Liste todos os medicamentos que você está tomando..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Observações</label>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Qualquer outra informação que você gostaria de registrar..."
                  />
                </div>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-600" />
                Histórico de Alterações
              </h3>
              <p className="text-gray-600">
                Seus dados são salvos automaticamente no navegador (localStorage). 
                Eles permanecerão disponíveis mesmo que você feche a página, 
                desde que não limpe o cache do navegador.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projeto
