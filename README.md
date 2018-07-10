# Softexpert Case Study

## Extenda uma aplicação de TodoList simples

Olá, esta é uma pequena aplicação de todo list, que você deverá extender e melhorar.

## Requerimentos

Por favor, tenha certeza que você tem instalado no seu ambiente o Node.js. 
Esta aplicação foi feita utilizando webpack, e sem estas duas ferramentas não há como prosseguir:

- Node.js (recommended: 4.x)
- npm (recommended: 2.x or 3.x)

## Setup

Uma vez que você garantiu a instalação das ferramentas acima, por favor instale os 
módulos requeridos da aplicação, usando o comando:


```sh
npm install
```

Para criar o build da aplicação, use este comando:

```sh
npm run build
```

e para continuar recriando o build enquanto trabalha, use:

```sh
npm start
```

Assim que você tiver o bundle construído, você pode abrir o `index.html`  no seu browser e 
verificar se a aplicação está funcionando corretamente.

## Como habilitar um teste?

Como esta aplicação é para ser supostamente um case study e não uma aplicação real,
você pode habilitar testes específicos, adicionado "#testName" na URL.

Por exemplo, para habilitar o teste "renderBottom", você abrirá o arquivo `index.html` 
e adicionará no final a hash "#renderBottom".

Example URL:
```
file:///C:/Users/user/Desktop/TodoList/index.html#renderBottom
```
Note que agora o campo input está renderizado abaixo da lista.