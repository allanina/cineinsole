# CineInsole 🎬

Essa página foi desenvolvida para o desafio da Insole. Consiste em uma página que apresenta diversos filmes a partir da API  do TheMovie DB (https://www.themoviedb.org/documentation/api).

## `Tecnologias utilizadas:`
| Ferramenta | Descrição |
| --- | --- |
| `React` | Biblioteca javascript |
| `Material Ui` | Biblioteca de componentes react |
| `Hooks` | APIs do React |
| `Axios` | biblioteca para consume de API |
| `npm` | Gerenciador de pacotes|
| `Netlify` | Servidor para deploy|
| `react-router-dom` | Biblioteca para criação de rotas no React|

## 📁 Arquitetura 

```
 📁 instituto-biomabrasil
   |
   |-  📁 src
   |    |
   |    |- 📁 assets
   |         |- 📄 logo-footer.png
   |
   |    |- 📁 components
   |         |- 📁 Footer
   |                |- 📄 Footer.jsx
   |                |- 📄 styles.css
   |         |- 📁 MovieCard
   |                |- 📄 MovieCard.jsx
   |                |- 📄 styles.css
   |         |- 📁 MovieInfo (não utilizado)
   |                |- 📄 MovieInfo.jsx
   |                |- 📄 styles.css
   |         |- 📁 MovieModal
   |                |- 📄 MovieModal.jsx
   |                |- 📄 styles.css
   |         |- 📁 MoviesPagination 
   |                |- 📄 MoviesPagination.jsx
   |                |- 📄 styles.css
   |
   |    |- 📁 pages
   |         |- 📁 Home
   |                |- 📄 Home.jsx
   |                |- 📄 styles.css
   |         |- 📁 Movie (não utilizada)
   |                |- 📄 Movie.jsx
   |                |- 📄 styles.css
   |         |- 📁 SearchMovies 
   |                |- 📄 SearchMovies.jsx
   |                |- 📄 styles.css
   |
   |    |- 📁 routes
   |         |- 📄 Routes.js 
   |    
   |
   |
   |    |- 📄 App.js
   |    |- 📄 index.js
   |    |- 📄 App.css
   |
   |
   

```

## 🔧 Dificuldades

A princípio, o site seria desenvolvido com base nesse protótipo que eu fiz no Figma (https://www.figma.com/proto/PwCGvoYpFzApns0xCRjP2C/movie-insole-Copy-Copy?page-id=0%3A1&node-id=5%3A51&viewport=241%2C48%2C0.1&scaling=min-zoom&starting-point-node-id=5%3A51&show-proto-sidebar=1), porém, por limitações de tempo, precisei fazer uma versão mais simplificada, baseada na versão desenvolvida por Piyush Agarwal (https://www.youtube.com/watch?v=vxUfx4aM5d8&t=6188s&ab_channel=RoadsideCoder).
<br>
<br>
Também encontrei dificuldades com relação ao deploy no heroku e no netlify, para possíveis Live Preview.
<br>
<br>
Foi utilizado Material UI para alguns componentes e estruturas, porém a maioria dos componentes foi feito em css puro.
<br>
<br>
Inicialmente foi criada uma pasta .env onde a chave da API seria guardada, porém tive problemas com a mesma no gtithub e acabei optando por manter a chave no próprio código, visto que não é uma API de conteúdo sensível/restrito.
<br>
<br>
Também busquei fazer uma página, cuja rota seria o ID do filme, mas acabei enfrentando dificuldades e acabei optando por utilizar um Modal do Material UI para exibição das informações dos filmes. O componente e a página que foram construídos nessa tentativa ainda estão no projeto.
<br>
<br>
A aplicação contém alguns bugs, principalmente com relação a componentes do Material UI, pois foi a primeira vez que utilizei a biblioteca e acabei enfrentando dificuldades no processo de utilização.
## 🚀 Melhorias futuras
Precisam ser feitas melhorias com relação a diversas coisas: responsividade, consumo da API de forma mais limpa, pois as páginas demoram a ser carregadas quando se navega entre as rotas. Além disso, futuramente devem ser realizadas outras informações, se acordo com o protótipo do Figma, como hovers com informações sobre os filmes, consumo de outros dados da api, inclusão de carrossel de imagens, etc, cumprindo melhor com o que foi requisitado no desafio, e com as minhas espectativas pessoais com relação a esse projeto.
<br>
<br>
## Considerações finais
Foi bastante desafiador fazer esse projeto num curto período de tempo, e outra versão do projeto foi realizada porém descontinuada (https://github.com/allanina/insolecine). Pude perceber facilidades e dificuldades que eu ainda possuo com relação ao React, e onde eu posso melhorar e o que eu posso aprender.
<br>
<br>
Apesar de não ter cumprido com as minhas espectativas pessoais, fiquei relativamente satisfeita com o projeto, e pretendo continuar trabalhando nele e desenvolvendo-o.
<br>
<br>
Agradeço à Insole pela oportunidade de realizar o desafio.
