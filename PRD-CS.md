# PRD - Landing Page CS "Streaming de Conhecimento" (Estilo Netflix)

## 1. Visão Geral
Criação de uma landing page didática e visualmente premium para Ciência da Computação, inspirada na interface do serviço de streaming Netflix. O objetivo é transformar o aprendizado de tecnologia em uma experiência imersiva, "maratonável" e organizada.

## 2. Objetivos
- **Mapeamento de Roadmap**: Traduzir o fluxo do PDF `computer-science.pdf` (roadmap.sh) em uma interface navegável.
- **Engajamento**: Usar a estética "Netflix Style" para tornar os tópicos de CS mais atraentes.
- **Acesso Rápido**: Centralizar links para aulas de alta qualidade no YouTube para cada tópico fundamental.
- **Categorização Inteligente**: Organizar o conteúdo de forma lógica, do básico ao avançado.

## 3. Público-Alvo
- Estudantes de Ciência da Computação.
- Desenvolvedores (Frontend, Backend) que desejam fortalecer seus fundamentos.
- Entusiastas de tecnologia que buscam um guia estruturado de estudos.

## 4. Funcionalidades Principais
### 4.1. Hero Section (Destaque Principal)
- **Banner Imersivo**: Uma "produção principal" (ex: "Fundamentos da Ciência da Computação") com imagem de fundo de alta qualidade (ex: códigos em Matrix, circuitos ou espaço).
- **CTA**: Botão "Assistir Agora" (direciona para uma introdução geral no YouTube) e "Mais Informações" (mostra detalhes da disciplina).

### 4.2. Carrosséis de Conteúdo (Categorias "Netflix")
As seções serão divididas da seguinte forma, baseada no roadmap:

- **"Próxima Temporada: Linguagens de Programação"**:
  - Cartazes: Python, Java, C++, Go, Rust, C#.
- **"O Coração do Código: Estruturas de Dados"**:
  - Cartazes: Arrays, Linked Lists, Stacks, Queues, Tree, Hash Tables, Graphs e Heaps.
- **"Grandes Sucessos: Algoritmos"**:
  - Cartazes: Sorting (Ordenação), Searching (Busca), Grafos, Big O Notation.
- **"Nos Bastidores: Infraestrutura"**:
  - Cartazes: Databases (SQL/NoSQL), Networking (TCP/IP, HTTP), Operating Systems.
- **"Arquitetura: Design de Sistemas"**:
  - Cartazes: Design Patterns, System Design, Scalability.
- **"Desenvolvimento Web" (Pedido do Usuário)**:
  - Cartazes: Frontend Fundamentals (HTML/CSS), Backend Mastery (Node/Python).

### 4.3. Card de Tecnologia (Poster)
- **Efeito Hover**: Ao passar o mouse, o card aumenta de tamanho (zoom) e mostra informações rápidas (dificuldade, duração estimada).
- **Ação de Clique**: Redireciona o usuário para uma playlist ou vídeo específico no YouTube sobre o tema.

### 4.4. Rodapé e Navegação
- Menu superior transparente que se torna sólido ao rolar (estilo Netflix).
- Footer com links para o repositório e referências ao roadmap.sh.

## 5. Requisitos de Design & Estética
- **Paleta de Cores**:
  - Fundo: `#141414` (Preto Netflix).
  - Texto: Branco e Cinza claro.
  - Accent Color: Vermelho ou Azul Elétrico para contrastar com tecnologia.
- **Tipografia**: Fontes modernas e geométricas (ex: Inter, Montserrat ou a clássica Netflix Sans).
- **Imagens**: Uso de cartazes gerados por IA ou imagens conceituais de alta resolução para cada área da computação.

## 6. Requisitos Técnicos
- **Frontend**: HTML5 Semântico, Vanilla CSS (com Flexbox/Grid) ou SASS.
- **Interatividade**: JavaScript para manipulação de DOM (efeitos de hover, links dinâmicos e scroll suave).
- **SEO**: Meta tags descritivas e estrutura de títulos (H1-H3).

## 7. Mapeamento YouTube (Exemplos)
- **Ciência da Computação**: Intro to CS (Harvard CS50).
- **Data Structures**: FreeCodeCamp 10h Course.
- **System Design**: ByteByteGo ou Playlist especializada.
