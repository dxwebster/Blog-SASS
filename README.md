<h1 align=center> Layout Responsivo com Filtro</h1>

<h6 align=center>
<img src="img/layout.gif" width=600><br>
  
  Baseado no vídeo: [Dê super poderes ao CSS com SASS | Masterclass #15](https://www.youtube.com/watch?v=BaI8dHUthLA)
  
</h6>

<h3 align=center>

💻 **Acesse a aplicação [aqui](https://dxwebster.github.io/Blog-SASS/)**

</h3>

Podemos dizer que o Sass é um "jeito" de escrevermos CSS que facilita muito na fase do desenvolvimento, seja de páginas em HTML  ou aplicações.

Ele é um pre-processador que utiliza a mesma lógica do CSS, e possui algumas características que torna o código mais intuitivo e organizado para os desenvolvedores.

Ao escrevermos nossos estilos com o Sass podemos trabalhar com encadeamento, variáveis, condicionais e até mesmo funções! E muitos outros recursos.

---

## 💡 Sobre o projeto

- Layout desenvolvido para estudo do SASS e Java Script
- ✨Inclusão de uma nova feature: [Isotope Filter](https://isotope.metafizzy.co/filtering.html)

## 🚀 Tecnologias utilizadas

- HTML
- CSS
- SASS
- Java Script
- Jquery

## 📥 Executar esse projeto no seu computador

- Clonar Repositório: `git clone https://github.com/dxwebster/Blog-SASS.git`
- Ir para a pasta: `cd Blog-SASS`
- Abrir index.html


## Como utilizar o SASS nos projetos

Com node já instalado na máquina

- Instalar sass globalmente (CLI do sass): `npm install -g sass` 
- Reiniciar terminal
- Abrir o projeto
- Rodar o sass: `sass --watch scss/main.scss css/main.css --style=compressed`


## Outras configurações úteis:

- Para rodar comandos no PowerShell
(This will allow running unsigned scripts that you write on your local computer and signed scripts from Internet.)
`set-executionpolicy remotesigned`

- Instalar CLI Purge CSS: `npm i -g purgecss`

- Limpar Css não utilizado: `purgecss --css css/grid.css --content index.html --output build`
