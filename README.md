# Minicurso React

Aplicação Web desenvolvida para praticar alguns dos principais conceitos de React, para o minicurso ministrado por mim na Semana Acadêmica de Ciência da Computação - UFT

A aplicação consiste em citações aleatórias de animes e imagens de avatar geradas a partir de uma entrada, consumidas pelas APIs:
- [Dicebear Avatar](https://github.com/public-apis/public-apis)
- [Anime Chan](https://animechan.vercel.app/)

Para acessar a gravação no Youtube:
- [Minicurso React - Turma 1](https://www.youtube.com/watch?v=T8sY-6naiBU&t)
- [Minicurso React - Turma 2](https://www.youtube.com/watch?v=o4lTt07hLfc&t)

## Set up
Para rodar esta aplicação na sua máquina, você precisará executar uma série de comandos em seu terminal:

### `git clone`
Para clonar este repositório, vá até o botão verde escrito **Code**, copie o link do projeto e cole depois do comando `git clone`.

### `npm install`
Em seguida, baixe as dependências usadas na aplicação.

## Tecnologias usadas

### [Node.js](https://nodejs.org/en/)
Na maioria das distribuições linux já vem instalado, você pode conferir por `node -v` ou `node --version`. \
Caso não tenha, instale com `sudo apt install nodejs` ou `sudo npm install -g node`.

### [NPM](https://www.npmjs.com/)
Gerenciador de Pacotes para o Node.js - *Node Package Manager*. \
Para instalar, rode `sudo apt install npm`.

### [React](https://reactjs.org/)
Para criar uma aplicação com [Create React APP](https://reactjs.org/docs/create-a-new-react-app.html) execute os comandos:

```shell
npx create-react-app my-app
cd my-app
npm start
```

Abra [http://localhost:3000/](http://localhost:3000/) para visualizar no browser.

## Estilização de componentes

Algumas bibliotecas recomendadas para estilização de componentes no React:

- [Mantine](https://mantine.dev/) - utilizada nesta aplicação
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)

## Rotas
Para fazer a manipulação de diferentes rotas, foi utilizado o pacote [React Router DOM](https://reactrouter.com/en/main), que pode ser adicionado à aplicação através do comando `npm i react-router-dom`.

### Root Page
Página inicial da aplicação, composta por citações aleatórias e imagens de avatar.

![Root Page](/img/root-page.png)

## Avatar Page
Página para criar um avatar a partir da seleção de *sprite* e *seed*.

![Avatar Page](/img/avatar-page.png)

## Quote Page
Página que exibe uma citação aleatória de anime, com o nome do personagem e o nome do anime.

![Quote Page](/img/quote-page.png)