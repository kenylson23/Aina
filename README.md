# Gloria's Cakes - Landing Page

Uma landing page moderna e animada para a confeitaria Gloria's Cakes, especializada em bolos e doces artesanais.

## 🎂 Sobre o Projeto

Esta é uma landing page responsiva com tema rosa, criada para showcasear os produtos e serviços da Gloria's Cakes. A página inclui:

- Design moderno com animações suaves
- Tema de cores rosa elegante
- Seções completas: Hero, Sobre, Produtos, Serviços e Contato
- Integração com WhatsApp para pedidos
- Totalmente responsiva para mobile e desktop

## 🚀 Deploy no Netlify

### Pré-requisitos
- Conta no Netlify
- Repositório Git (GitHub, GitLab, etc.)

### Passos para Deploy

1. **Faça o push do código para seu repositório Git**

2. **No Netlify Dashboard:**
   - Clique em "New site from Git"
   - Conecte seu repositório
   - Configure as seguintes opções:
     - **Build command:** `node build-netlify.js`
     - **Publish directory:** `dist`
     - **Node version:** `20`

3. **Deploy automático:**
   - O Netlify detectará automaticamente as configurações do `netlify.toml`
   - O build será executado automaticamente
   - Sua página estará disponível em poucos minutos

### Estrutura de Arquivos Importantes

```
├── netlify.toml              # Configuração do Netlify
├── _redirects               # Redirecionamentos SPA
├── vite.config.netlify.ts   # Config Vite para produção
├── build-netlify.js         # Script de build customizado
├── client/                  # Código fonte React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/          # Páginas da aplicação
│   │   └── index.css       # Estilos globais
└── attached_assets/         # Imagens e assets
```

## 📱 Funcionalidades

- **Navigation:** Menu responsivo com scroll suave
- **Hero Section:** Apresentação principal com animações
- **About Section:** História e diferenciais da empresa
- **Products Section:** Showcase dos produtos principais
- **Services Section:** Serviços oferecidos
- **Contact Section:** Informações de contato e WhatsApp
- **Footer:** Links sociais e informações adicionais

## 🎨 Tema de Cores

O projeto utiliza uma paleta de cores rosa personalizada:
- Rosa Principal: `hsl(332, 78%, 66%)`
- Rosa Claro: `hsl(336, 100%, 95%)`
- Rosa Escuro: `hsl(340, 72%, 45%)`
- Rose Gold: `hsl(343, 82%, 55%)`
- Creme: `hsl(210, 20%, 98%)`

## 📞 Contato

- **Telefone:** 940853465
- **Localização:** Zango 3 primeira paragem
- **WhatsApp:** Integrado para pedidos diretos

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animações)
- Lucide React (ícones)
- Vite (build tool)

---

Desenvolvido com ❤️ para Gloria's Cakes