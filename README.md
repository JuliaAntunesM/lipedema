# LipedemaCare - Landing Page

Página de vendas moderna sobre lipedema, criada com React, Vite e TailwindCSS.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **TailwindCSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones

## 📋 Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Seção hero com call-to-action
- ✅ Informações sobre lipedema
- ✅ 6 benefícios do aplicativo
- ✅ Depoimentos de usuárias
- ✅ Seção de CTA final
- ✅ Footer completo

## 🛠️ Como Executar

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (versão 16 ou superior).

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra seu navegador e acesse `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist`.

## 📱 Estrutura do Projeto

```
lipedema/
├── index.html          # Arquivo HTML principal
├── package.json        # Dependências do projeto
├── vite.config.js      # Configuração do Vite
├── tailwind.config.js  # Configuração do TailwindCSS
├── postcss.config.js   # Configuração do PostCSS
└── src/
    ├── main.jsx        # Ponto de entrada da aplicação
    ├── App.jsx         # Componente principal
    └── index.css       # Estilos globais
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `tailwind.config.js`. O tema usa uma paleta rosa/roxa como cor primária.

### Conteúdo

Todo o conteúdo da página está no arquivo `src/App.jsx`. Você pode modificar textos, seções e componentes conforme necessário.

## 📄 Seções da Página

1. **Header** - Navegação fixa com logo e botão de download
2. **Hero** - Seção principal com título impactante e CTAs
3. **O Que é Lipedema** - Explicação da condição com 3 cards informativos
4. **Benefícios do App** - 6 funcionalidades principais do aplicativo
5. **Depoimentos** - 3 testemunhos de usuárias satisfeitas
6. **CTA Final** - Chamada para ação com gradiente
7. **Footer** - Informações legais e links úteis

## 🌐 Deploy

Esta página pode ser facilmente implantada em:
- Vercel
- Netlify
- GitHub Pages
- Qualquer serviço de hosting estático

## 📝 Licença

Este projeto é de propriedade exclusiva.
