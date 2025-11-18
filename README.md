# 💼 Curriculum Page - Kevin Costantino

[![Deploy Status](https://img.shields.io/badge/Deploy-Live-success)](https://kevincostantino.github.io/curriculum-page/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-green)](https://pages.github.com/)

> **Página de currículo profissional desenvolvida em React com design moderno e responsivo**

🌐 **[Ver Página ao Vivo](https://kevincostantino.github.io/curriculum-page/)**

## 🚀 Sobre o Projeto

Esta é uma página de currículo interativa e moderna, desenvolvida com React e otimizada para GitHub Pages. O projeto apresenta um design glassmorphism com animações suaves e navegação intuitiva.

### ✨ Funcionalidades

- **🏠 Home**: Seção principal com foto de perfil e efeito hover para descrição
- **💼 Experience**: Timeline profissional com histórico de trabalho
- **🎯 Projects**: Showcase de projetos com cards responsivos
- **⚡ Skills**: Radar chart interativo com habilidades técnicas
- **📞 Contact**: Seção de contato com botões estilizados
- **🎨 Design**: Glassmorphism moderno e totalmente responsivo

### 🛠️ Tecnologias

- **React 18.2.0** - Framework principal
- **React Icons 4.10.1** - Biblioteca de ícones
- **CSS3** - Estilização com Flexbox/Grid
- **GitHub Pages** - Hospedagem
- **gh-pages** - Deploy automático

## 📦 Scripts Disponíveis

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm run build`

Constrói a aplicação para produção na pasta `build`.\
Otimiza o build para melhor performance com arquivos minificados.

### `npm run deploy`

**🚀 Script personalizado para GitHub Pages**\
Executa o build de produção e faz deploy automático para GitHub Pages.

### `npm test`

Executa os testes em modo interativo.

## 🔧 Instalação e Configuração

```bash
# Clone o repositório
git clone https://github.com/KevinCostantino/curriculum-page.git

# Entre no diretório
cd curriculum-page

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

## 🌐 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages:

```bash
# Build e deploy em um comando
npm run deploy
```

### Configuração do GitHub Pages

1. **Repository Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages`
4. **Folder**: `/ (root)`

## 📱 Design Responsivo

- **Desktop**: Layout completo com sidebar de skills
- **Tablet**: Layout adaptado com navegação otimizada  
- **Mobile**: Stack vertical com componentes empilhados

## 🎨 Características do Design

- **Glassmorphism**: Efeitos de vidro translúcido
- **Animações CSS**: Transições suaves e hover effects
- **Navegação Fixa**: Header sempre visível com scroll suave
- **Radar Chart**: Visualização interativa de habilidades
- **Cards Responsivos**: Layout flexível para projetos

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── App.js/css          # Componente principal
│   ├── Header.js/css       # Navegação fixa
│   ├── Home.js/css         # Seção inicial
│   ├── Experience.js/css   # Timeline profissional
│   ├── Projects.js/css     # Showcase de projetos
│   ├── Skills.js/css       # Radar chart de skills
│   ├── Contact.js/css      # Formulário de contato
│   └── media/              # Assets e imagens
├── index.js                # Entry point
└── index.css               # Estilos globais
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Kevin Costantino**
- GitHub: [@KevinCostantino](https://github.com/KevinCostantino)
- LinkedIn: [Kevin Costantino](https://linkedin.com/in/kevincostantino)
- Portfolio: [kevincostantino.github.io/curriculum-page](https://kevincostantino.github.io/curriculum-page/)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
