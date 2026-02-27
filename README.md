# 🌴 Laviagens - Landing Page de Turismo

Fala, dev! Beleza? 👋 

Este é o repositório da **Laviagens**, uma landing page moderna, super rápida e focada em conversão para uma agência de turismo hipotética. 

O foco deste projeto foi construir uma interface de usuário (UI) absurdamente limpa, com animações suaves e, de quebra, aplicar conceitos reais de **Performance** e **Clean Code**.

---

## 🛠️ Tecnologias que usamos (Nossa Stack)

Se você está começando a estudar agora, dê uma olhada nestas ferramentas. Elas são muito usadas no mercado:

*   **[Vite](https://vitejs.dev/):** Pense nele como um servidor local super rápido. Ele pega nosso código e "empacota" para o navegador entender de forma instantânea. Substitui o velho "Live Server".
*   **[Tailwind CSS (v4)](https://tailwindcss.com/):** Uma biblioteca de CSS fantástica. Em vez de escrever arquivos `.css` gigantescos, a gente estiliza as coisas colocando "classes" direto no HTML (ex: `flex items-center text-white`). É muito prático e rápido!
*   **HTML5 & CSS3 Vanilla:** A base da web! Usamos CSS puro para algumas animações chave e para configurar as variáveis de cores.
*   **[Lenis](https://lenis.darkroom.engineering/):** Uma biblioteca mágica feita em JavaScript que transforma a rolagem da página (scroll) de algo "seco" e travado para algo suave e amanteigado (smooth scroll).
*   **JavaScript (ES6+):** Usamos JS puro (Vanilla) para controlar os eventos da página (como capturar quando o usuário faz scroll para animar os elementos aparecendo na tela usando o `IntersectionObserver`).

---

## 🚀 Como foi construído? (Arquitetura e Decisões)

Para você que está aprendendo, aqui vão alguns "segredos" de como estruturamos esse projeto:

### 1. Separação de Responsabilidades
Em vez de jogar tudo num buraco só, organizamos assim:
*   `index.html`: Fica com o "esqueleto" do site (os textos, as divs, as imagens).
*   `src/style.css`: Guarda coisas globais, como fontes, a paleta de cores (usando variáveis CSS como `--color-brand-amber`) e animações chaves (keyframes).
*   `src/main.js`: Apenas a lógica interativa (o listener de scroll, a inicialização do Lenis e o Intersection Observer que faz os textos irem brotando na tela).

### 2. Imagens Táticas (Z-Index e Posição Absoluta)
Na primeira seção (Hero), ensinamos o CSS a sobrepor imagens. Usamos `position: relative` e `absolute`, combinados com o `z-index`. Isso permitiu colocar a "Mulher Sorrindo" na *frente* dos "Cards Flutuantes", criando um efeito 3D muito bacana.

### 3. Clean Code (Código Limpo)
Durante o desenvolvimento, percebemos que muita coisa não estava sendo usada (como links no cabeçalho e menu de celular). 
**Lição de ouro:** *Menos código é sempre melhor.* Deletamos todo o HTML, CSS e JS que não servia mais. Isso facilita a leitura por outros programadores e previne bugs.

### 4. Performance Extrema ⚡
Acho que a parte mais legal do que fizemos aqui foi otimizar o site para ele abrir rápido como um raio:
*   **Lazy Loading:** Adicionamos `loading="lazy"` nas imagens que ficam lá pra baixo no site. Significa que o navegador só baixa essas fotos *se* o usuário começar a rolar a tela, economizando megabytes de dados.
*   **Preloading de Vídeo:** Como usamos um vídeo de fundo logo de cara, colocamos no `<head>` um `<link rel="preload" as="video">`. Isso avisa pro navegador: *"Ei, pare tudo e baixe esse vídeo primeiro porque ele é a coisa mais importante!"*. Isso melhora muito uma métrica do Google chamada **LCP (Largest Contentful Paint)**.

---

## 💻 Como rodar esse projeto na sua máquina?

Quer mexer no código, quebrar umas coisas e aprender? Siga esses passos:

1.  **Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/) instalado no seu PC (ele ajuda a rodar códigos e baixar pacotes).
2.  **Clone o projeto:** Baixe esse código pro seu computador usando o Git.
    ```bash
    git clone https://github.com/Gustar0cha/pousadav1.git
    cd pousadav1
    ```
3.  **Instale os "tijolos" (Dependências):** Mande o Node baixar o Vite e o Tailwind pro seu projeto.
    ```bash
    npm install
    ```
4.  **Ligue o servidor local!**
    ```bash
    npm run dev
    ```
5.  Aparecerá um link no seu terminal (geralmente `http://localhost:5173`). Segure a tecla `CTRL` e clique nele para abrir no navegador. Pronto! ✨

---

> **Dica de dev para dev:** Não tenha medo de quebrar. Entre no index.html, mude umas palavras, troque umas cores no CSS (tente mudar o `--color-brand-amber` no arquivo `style.css` para `#ff0000`). A melhor forma de aprender é futucando!

Bons estudos e bons códigos! 🚀
