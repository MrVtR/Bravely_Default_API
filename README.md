# Bravely_Default_API

## Conceito do projeto
Este projeto consiste em construir uma API para o jogo Bravely Default, desenvolvida por mim e que será consumida no projeto da Montagem de uma Wiki do jogo, podendo ter o progresso conferido neste link.

### Versão Beta 
A primeira versão feita para este projeto de API foi construída utilizando o site mockapi.io, este site permite que o usuário crie e consuma uma API limitada no plano gratuito e já está finalizada, podendo ser conferida a partir da clonagem do projeto(necessário uma conta criada no site para clonar).

### Versão Completa
A versão completa está sendo construída neste exato momento e seu progresso poderá ser conferido no presente repositório. Consistindo de uma aplicação feita em Node.js, o objetivo é fazer uma API completa do jogo que possa ser futuramente ser integrada e consumida dentro do projeto de Wiki do jogo

### To-Do List da Versão Completa da API
- [x] Criar o servidor que irá rodar a aplicação
- [x] Determinar quais arquivos em .json estarão incluídos na API
- [x] Criar as rotas que irão consumir os arquivos .json e retornar os dados
- [x] Criar o arquivo principal da aplicação que irá mapear qual URL irá utilizar um determinado arquivo
- [ ] Adicionar mais dados aos arquivos .json
- [ ] Criar Rotas para os Locais do jogo
- [ ] Integrar a API no projeto principal ou descobrir uma forma fazer upload dela em uma URL permanente
- [ ] Consumir a API na Wiki do jogo

## Pré-requisitos e recursos utilizados
Para a versão Beta da API, foi utilizado apenas o site mockapi.io como recurso utilizado, além da montagem dos arquivos .json para serem consumidos no site
Já na versão Completa, estou utilizando das seguintes bibliotecas em Node.JS para criar a aplicação:
1. Express para ser possível criar um servidor que recebe requisições e retorna os dados solicitados
2. CreateRequire para importar arquivos .json sem que haja conflitos devido a sintaxe nova do JavaScript ES6
  
## Passo a passo
1. Pesquisei um site para fazer Mocks de APIs e construí um modelo de API que está sendo consumido pela Wiki do Jogo
2. Alimentei esta API limitada com arquivos .json e configurei meu projeto principal para fazer requisições
3. Estudei como criar uma API usando Node.JS
4. Implementei um servidor que fica "ouvindo" requisições no arquivo server.js
5. Criei os arquivos que retornarão os dados dos .json para a aplicação na pasta "routes"
6. Fiz o mapeamento de quais rotas poderiam ser acessadas para se ter uma requisição no arquivo App.js

## Instalação
Para instalar as dependências do projeto localmente, utilize a instrução abaixo:
1. Após baixar o projeto, digite no terminal ```yarn install``` e espere pela instalação das dependências, após isso, siga para a etapa de [Execução](#Execução)

## Execução
Para executar o programa é necessário instalar as dependências utilizadas, que estão no package.json e após isso executar o projeto,para estar operações, utilize os comandos abaixo:
1. Digite no terminal ```yarn start``` para rodar o projeto em modo desenvolvimento.


## Autores
* Vítor Ribeiro ([MrVtR](https://github.com/MrVtR))
