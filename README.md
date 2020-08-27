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


