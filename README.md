# 🚀 Desafio Técnico Front-End - Magazord

## 🧩 Descrição do Desafio

Neste desafio, foi proposto o desenvolvimento de uma página para **visualização de repositórios pessoais** e **marcados como salvos** por usuários do **GitHub**.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- ⚡ **Vite** com **React** e **TypeScript**
- 🧠 **Zustand** para controle de estados globais
- 🔁 **React Query** para cache e controle de requisições
- 🎨 **Tailwind CSS** para estilização
- ☁️ **Vercel** para deploy

Essas tecnologias foram escolhidas pela facilidade de uso, integração fluida entre si e excelente desempenho.  
Além disso, optei por ferramentas com as quais já tenho ampla familiaridade no desenvolvimento com **React**, **Vite** e **TypeScript**.

---

## 💻 Executando o Projeto

### 🔗 Visualização em Produção

Acesse o projeto em produção através do link:  
👉 [**https://test-front-end-davienriquelerne-davi-enriques-projects.vercel.app**](#)

### 🧱 Executar Localmente

Para rodar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/DaviEnriqueLerne/Teste-Front-Magazord.git

# Acesse o diretório do projeto
cd nome-do-projeto

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

```

---

Após isso, acesse http://localhost:5173 no seu navegador.

Por padrão, o projeto exibirá os repositórios do autor, mas é possível trocar o usuário clicando em “Change User” e pesquisando qualquer outro usuário do GitHub.

### 🧱 Estrutura do Projeto

O projeto segue o padrão de organização do React, estruturado da seguinte forma:

```bash
src/
├── pages/
│ └── name_page/
│ ├── controller/
│ └── view/
├── components/
├── hooks/
├── store/ # Zustand
└── ...
```

Dentro de cada página, há uma controller responsável pelas chamadas às APIs do GitHub e pelo gerenciamento dos dados via Zustand.
A view contém os componentes principais da interface.
Cada componente é isolado e responsável apenas pela sua própria lógica, evitando dependências e conflitos com outros componentes.
Essa abordagem visa facilitar a manutenção, melhorar a legibilidade e permitir refatorações futuras com segurança.

---

# 💡 Funcionalidades e Melhorias

Durante o desenvolvimento, implementei algumas melhorias:

🪟 Criação de um modal padrão para mobile e desktop, garantindo uma experiência consistente.

👤 Implementação da troca dinâmica de usuário (botão “Change User”).

⚙️ Custom Hooks reutilizáveis para otimizar as chamadas às APIs.

🔍 Filtro unificado para o modal de seleção e o campo de busca.

---

# 🧠 Desafios Enfrentados

Alguns pontos exigiram atenção especial:

Otimização das chamadas à API, evitando repetições desnecessárias.
Organização do código de forma limpa e legível, dispensando comentários excessivos.
Estilização com Tailwind CSS, já que normalmente utilizo bibliotecas de componentes internas.
Implementação dos filtros e modais, garantindo performance e reaproveitamento de componentes.
Mantive um fluxo de desenvolvimento mais formal, utilizando:

#### Branch dev

#### Pull requests

#### Commits descritivos e bem organizados

---

# 🔮 Possíveis Melhorias Futuras

Criação de componentes genéricos reutilizáveis, como uma mini-lib interna.
Desenvolvimento de uma nova página para busca global de repositórios no GitHub (não apenas de um usuário específico).
Expansão do projeto aproveitando ainda mais a API pública do GitHub.

---

# 🧾 Conclusão

Esse projeto foi uma excelente oportunidade para revisar todo o ciclo de desenvolvimento — desde a criação do repositório até o deploy na Vercel — e reforçar boas práticas de organização, versionamento e componentização.
