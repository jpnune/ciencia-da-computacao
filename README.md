# CS+ | Plataforma de Streaming de Conhecimento

## Link Para Pagina do Projeto
https://ciencia-da-computacao-pi.vercel.app/

## 🚀 Arquitetura Profissional (Dev/Dist)
O projeto utiliza o padrão de isolamento de código:
- **`dev/`:** Diretório de desenvolvimento.
  - `pages/`: Organização das 17 séries/disciplinas.
  - `src/`: Ativos fontes (Sass, JS, Imagens).
- **`dist/`:** Diretório de distribuição (produção), gerado automaticamente pelo Grunt.

## 🎨 Design System: Prime Blue Vibrante
Interface de alto contraste inspirada em serviços de streaming premium (Prime Video):
- **Contraste 4K:** Tipografia branca nítida sobre fundo azul saturado.
- **Micro-Interações:** Efeito de hover com zoom e glow ciano em posters.
- **Acessibilidade:** Cores selecionadas para máxima legibilidade (WCAG Compliant).

## 🛠️ Manutenção
Para realizar alterações:
1. Trabalhe exclusivamente nos arquivos dentro da pasta `dev/`.
2. O **Grunt** sincronizará automaticamente as mudanças para a pasta `dist/`.
3. Para compilar manualmente, execute `grunt dev`.

---
*Projeto desenvolvido para excelência técnica e visual em Ciência da Computação.*
