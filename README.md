Documentação da API de Livros
Visão Geral

Esta API fornece funcionalidades para gerenciar uma coleção de livros. Você pode listar, visualizar, adicionar, atualizar e excluir livros. A API utiliza Express e CORS.
URL Base

bash

http://localhost:3000/api/books

Endpoints
1. Obter Todos os Livros

    Método: GET
    Endpoint: /api/books
    Descrição: Retorna uma lista de todos os livros disponíveis.
    Resposta de Sucesso:
        Código: 200 OK
        Corpo da Resposta:

        json

        [
          {
            "id": 1,
            "titulo": "Título do Livro",
            "autor": "Autor do Livro",
            "ano": 2021
          },
          ...
        ]

2. Obter um Livro Específico

    Método: GET
    Endpoint: /api/books/:id
    Parâmetros:
        id: ID do livro que deseja recuperar.
    Descrição: Retorna um livro específico pelo ID.
    Resposta de Sucesso:
        Código: 200 OK
        Corpo da Resposta:

        json

    {
      "id": 1,
      "titulo": "Título do Livro",
      "autor": "Autor do Livro",
      "ano": 2021
    }

Resposta de Erro:

    Código: 404 Not Found
    Corpo da Resposta:

    json

        {
          "message": "Livro não encontrado."
        }

3. Adicionar um Novo Livro

    Método: POST
    Endpoint: /api/books
    Corpo da Requisição:

    json

{
  "titulo": "Título do Livro",
  "autor": "Autor do Livro",
  "ano": 2021
}

Descrição: Adiciona um novo livro à coleção.
Resposta de Sucesso:

    Código: 201 Created
    Corpo da Resposta:

    json

    {
      "id": 2,
      "titulo": "Título do Livro",
      "autor": "Autor do Livro",
      "ano": 2021
    }

Resposta de Erro:

    Código: 400 Bad Request
    Corpo da Resposta:

    json

        {
          "message": "Todos os campos são necessários para inclusão do livro."
        }

4. Atualizar um Livro Existente

    Método: PATCH
    Endpoint: /api/books/:id
    Parâmetros:
        id: ID do livro que deseja atualizar.
    Corpo da Requisição:

    json

{
  "titulo": "Novo Título",
  "autor": "Novo Autor",
  "ano": 2022
}

Descrição: Atualiza os detalhes de um livro existente.
Resposta de Sucesso:

    Código: 200 OK
    Corpo da Resposta:

    json

    {
      "id": 1,
      "titulo": "Novo Título",
      "autor": "Novo Autor",
      "ano": 2022
    }

Resposta de Erro:

    Código: 404 Not Found
    Corpo da Resposta:

    json

        {
          "message": "Livro não encontrado"
        }

5. Excluir um Livro

    Método: DELETE
    Endpoint: /api/books/:id
    Parâmetros:
        id: ID do livro que deseja excluir.
    Descrição: Remove um livro da coleção.
    Resposta de Sucesso:
        Código: 200 OK
        Corpo da Resposta:

        json

    {
      "message": "Livro removido com sucesso.",
      "deletedBook": {
        "id": 1,
        "titulo": "Título do Livro",
        "autor": "Autor do Livro",
        "ano": 2021
      }
    }

Resposta de Erro:

    Código: 404 Not Found
    Corpo da Resposta:

    json

        {
          "message": "Livro não encontrado."
        }

Execução da API

Para executar a API, você deve ter o Node.js instalado. Após isso, siga os passos abaixo:

    Instale as dependências:

    bash

npm install express cors

Inicie o servidor:

bash

node index.js

Acesse a API: Abra seu navegador e vá para http://localhost:3000.
