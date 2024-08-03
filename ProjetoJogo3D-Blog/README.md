# GamoBlog 3D Experience

**Descrição:**
GamoBlog 3D Experience é um projeto inovador que integra um mundo interativo 3D com uma estrutura de blog tradicional. O objetivo principal é criar uma experiência única para o usuário, onde visitantes podem explorar diferentes partes de um site através de um ambiente 3D. Este projeto utiliza Three.js para renderização 3D e é projetado para ser facilmente expansível com vários elementos interativos e NPCs (Personagens Não Jogáveis) que redirecionam para diferentes seções do site.

## Funcionalidades Atuais:
- **Inicialização da Cena 3D:** Configuração básica com Three.js incluindo cena, câmera e renderizador.
- **Plano de Chão:** Um plano simples que serve como base do mundo 3D.
- **Integração de NPCs:** Objetos NPC básicos que podem ser clicados para navegar para diferentes seções do site.
- **Controles de Órbita:** Controles de câmera para fácil navegação dentro do espaço 3D.
- **Design Responsivo:** Configuração inicial para design responsivo garantindo que a cena se ajuste a diferentes tamanhos de tela.

## Futuras Melhorias:
- **Expansão da Funcionalidade de NPCs:** Implementação de diálogos e interações mais complexas com NPCs.
- **Geração de Terreno Avançada:** Introdução de terreno processual e características ambientais.
- **Modelos 3D Personalizados:** Adição de modelos personalizados para edifícios, personagens e outros objetos.
- **Mecânicas de Jogo:** Desenvolvimento de mecânicas básicas de jogo, como missões e conquistas.
- **Integração com Conteúdo do Blog:** Vinculação dinâmica de NPCs e objetos aos últimos posts do blog, itens de portfólio e outros conteúdos do site.
- **Recursos Multijogador:** Exploração de possibilidades para interação em tempo real entre usuários no mundo 3D.

## Estrutura do Projeto:
ProjetoJogo3D-Blog/
|-- public_html/
| |-- GamoBlog/
| |-- blog/
| |-- images/
| |-- posts/
| |-- blog.html
| |-- threejs-world/
| |-- assets/
| |-- css/
| |-- models/
| |-- scripts.js
| |-- world.js
| |-- NPC.js
| |-- index.html
| |-- style.css
|-- node_modules/
|-- package.json
|-- README.md


## Tecnologias Utilizadas:
- **Three.js:** Para renderização de gráficos 3D no navegador.
- **OrbitControls.js:** Para habilitar a movimentação e interação da câmera.
- **JavaScript:** Linguagem principal para lógica e funcionalidades.
- **HTML & CSS:** Para estruturação e estilização da interface web.

## Referências:
- [Documentação Three.js](https://threejs.org/docs/)
- [OrbitControls.js](https://threejs.org/examples/js/controls/OrbitControls.js)
- [Tutorial de Mundo Básico por SimonDev](https://github.com/simondevyoutube/ThreeJS_Tutorial_BasicWorld.git)

## Instruções de Configuração:
1. Clone o repositório: `git clone <repository-url>`
2. Navegue até o diretório do projeto: `cd ProjetoJogo3D-Blog`
3. Instale as dependências: `npm install`
4. Execute o projeto localmente: Use um servidor local como o Live Server para visualizar o ambiente 3D.

## Contribuindo:
Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request para quaisquer melhorias ou funcionalidades que você gostaria de ver.
