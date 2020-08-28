<p align=center>

<h5 align=center>
<img src="img/home.png" width=600><br>

- Aplicação desenvolvida para estudo do SASS, baseado no vídeo [Dê super poderes ao CSS com SASS](https://www.youtube.com/watch?v=BaI8dHUthLA)

- Inclusão de uma nova feature: Filtro

</h5>

<h3 align=center>

💻 **Acesse a aplicação [aqui](https://dxwebster.github.io/Blog-SASS/)**

</h3>

</p>

---

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