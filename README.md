# Site Tudo Fácil

Aplicação criada como parte do projeto de PI do 2º Semestre do curso Desenvolvimento de Software Multiplataforma na Fatec Franca

Integrantes do Grupo:

- Cristian Nascimento
- Eduardo Vilas Boas Freitas
- Luhara Fernandes 
- Silvio Alves da Silva Junior
- Vinicius Baldochi


 Vídeo: https://youtu.be/FNbmRmy_mvo

 Documentação: https://1drv.ms/w/s!AmaFUMXs-qWBzvleZWUkoFWCDm14kg?e=a9LGE5

## Projeto Front-End (/frontend)
Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.10.

Por isso, **é necessário ter o Node.js e o Angular CLI instalados para executar a aplicação**

Download Node.js: https://nodejs.org/

Comando de instalação Angular CLI: `npm install -g @angular/cli`

## Utilização de estilos

O Bootstrap foi utilizado como framework de estilos (https://getbootstrap.com/)

O Animate.css (https://animate.style/)  foi utilizado para a realização de algumas das animações presentes no projeto

## Instalação de dependências

Execute `npm i` para instalar as dependências do projeto

## Servidor de desenvolvimento

Execute `ng serve` executar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos presentes no projeto.

Executar `ng serve -o` irá abrir o navegador automaticamente.

## Criação de componentes, serviços, etc

Execute `ng generate component-name` para gerar um novo componente. Você também pode usar `ng generate directiva|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Executando Testes

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## Executando testes de ponta a ponta

Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar esse comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta.

## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Angular CLI Overview and Command Reference](https://angular.io/cli).

---------------------------------------

## Projeto Back-End (/backend)

#### Para o correto funcionamento do projeto, é necessária a criação e correta configuração de uma instância do SGBD **MySQL**

## Instalação de dependências

Execute `npm i` para instalar as dependências do projeto

## Estrutura do banco de dados

Execute `npm run migration:run` para montar a estrutura do banco de dados

## Servidor de desenvolvimento

Execute `npm run dev` executar o servidor de desenvolvimento. Navegue até `http://localhost:3000/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos presentes no projeto.