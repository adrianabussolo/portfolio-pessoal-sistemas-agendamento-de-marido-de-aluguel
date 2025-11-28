# Sistema de Agendamento de Marido de Aluguel

API RESTful para agendamento de serviços de marido de aluguel, desenvolvida em Node.js com Express, autenticação JWT e documentação Swagger.

## Funcionalidades
- Login, listagem, atualização e remoção de serviços
- Autenticação de usuários via JWT
- Documentação interativa via Swagger UI
- Armazenamento dos dados em memória

## Estrutura do Projeto
- `routes/` — Definição das rotas da API
- `controllers/` — Lógica dos endpoints
- `service/` — Regras de negócio
- `model/` — Modelos de dados
- `middleware/` — Middlewares de autenticação e outros
- `resources/` — Documentação Swagger

## Instalação
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a aplicação:
   ```bash
   npm start
   ```

## Endpoints Principais

### Autenticação
- `POST /auth/login` — Realiza login e retorna um token JWT

### Serviços
- `GET /servicos` — Lista todos os serviços (requer JWT)
- `POST /servicos` — Cadastra um novo serviço (requer JWT)
- `GET /servicos/{id}` — Busca serviço por ID (requer JWT)
- `PUT /servicos/{id}` — Atualiza serviço (requer JWT)
- `DELETE /servicos/{id}` — Remove serviço (requer JWT)

### Swagger
- `GET /docs` — Acessa a documentação interativa da API

## Autenticação JWT
- Para acessar os endpoints protegidos, envie o token JWT no header:
  ```
  Authorization: Bearer <seu_token>
  ```

## Documentação Swagger
Acesse `/docs` para visualizar e testar os endpoints da API.

## Observações
- O banco de dados é em memória, os dados são perdidos ao reiniciar a aplicação.
- Para customizar os modelos ou endpoints, edite o arquivo `resources/swagger.yaml`.

## Coleção Postman

[Baixar coleção do Postman](./postman/api-marido-de-aluguel.postman_collection.json)

Importe este arquivo no Postman para testar rapidamente os endpoints da API.
