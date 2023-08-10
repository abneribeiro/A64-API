<div style="background-color: #161617; padding: 20px;">

  <h1 style ="text-align: center; color: #07c4da;">A63 CRUD</h1>

This project is a CRUD (Create, Read, Update, Delete) application developed in Node.js using the MongoDB database. The application allows users to be created with a username and password, and once created, they can create quotes. Each user will have their `userId` associated with each quote.

The application was developed to provide a simple interface for creating, viewing, updating, and deleting users and their respective quotes.

<h2 style ="text-align: center; color: #07c4da;"> Technologies Used </h2>

- Node.js: Backend development platform.
- Express.js: Web framework for Node.js that facilitates the creation of routes and APIs.
- MongoDB

### Project Dependencies

- Express-validator
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js

<h2 style ="text-align: center; color: #07c4da;"> Features</h2>

### 1. Create Users

- Endpoint: `POST /auth/register`
- Description: Creates a new user with a name and password. The user's ID is automatically generated by the backend.
- Parameters:
  - `username` (string): User's name.
  - `email` (string): User's email.
  - `password` (string): User's password.

- Response (JSON):
  - `message`: User registered successfully.
  - `message`: Failed to register user.

### 1. Login Users

  - Endpoint: `POST /auth/login`
  - Description: The user login by entering the name and password and generated a token.
  - Parameters:

### 2. View User by ID

- Endpoint: `GET /users/:id`
- Description: Returns the information of a specific user based on the provided ID.
- Parameters:
  - `id` (number): Desired user ID.
- Response (JSON):
  - `id` (number): User's ID.
  - `name` (string): User's name.
  - `password` (string)

### 3. Update User by ID

- Endpoint: `PUT /users/:id`
- Description: Updates the information of a specific user based on the provided ID.
- Parameters:
  - `id` (number): ID of the user to be updated.
  - `name` (string): New name of the user (optional).
  - `password` (string): New password of the user (optional).
- Response (JSON):
  - `id` (number): Updated user's ID.
  - `name` (string): New name of the user (if updated).
  - `password` (string): New password of the user (if updated).
  - `createdAt` (string): Date and time of user creation.
  - `actions` (array): List of actions performed by the user (not yet implemented).

### 4. Delete User by ID

- Endpoint: `DELETE /users/:id`
- Description: Deletes a specific user based on the provided ID.
- Parameters:
  - `id` (number): ID of the user to be deleted.
- Response (JSON):
  - `message` (string): Confirmation message of the user's deletion.

### 5. Create Post

- Endpoint: `POST /posts/:userId`
- Description: Creates a new post for a specific user based on the provided user ID.
- Parameters:
  - `userId` (number): ID of the user to which the post will be associated.
  - `content` (string): Post content.
- Response (JSON):
  - `id` (number): Automatically generated ID for the post.
  - `userId` (number): ID of the user associated with the post.
  - `content` (string): Post content.
  - `createdAt` (string): Date and time of post creation.

### 6. View Posts by User ID

- Endpoint: `GET /posts/:userId`
- Description: Returns a list of posts from a specific user based on the provided user ID.
- Parameters:
  - `userId` (number): ID of the user whose posts will be viewed.
- Response (JSON - Array):
  - `id` (number): Post ID.
  - `userId` (number): ID of the user associated with the post.
  - `content` (string): Post content.
  - `createdAt` (string): Date and time of post creation.

## Next Steps / Roadmap

1. Authentication

   - Add authentication to ensure that only authenticated users can create posts and perform other actions.

2. Database

   - Implement a more robust database, such as MongoDB, to improve the scalability and performance of the application.

## How to Run the Project

1. Clone the repository to your local machine using the command `git clone <REPOSITORY_URL>`.

2. Navigate to the project directory using the command `cd directory-name`.

3. Install project dependencies using the command `npm install`.

4. Start the server using the command `node app.js`.

5. The application will be available at `http://localhost:3000`.

## Final Remarks

This project is a simple application developed to demonstrate the basic functionality of a CRUD with Node.js and JSON as the database. The code has been organized into modules to facilitate understanding and maintenance.

Thank you for reviewing this project. Feel free to get in touch if you have any questions or suggestions for improvement.r): User's password.

- `createdAt` (string): Date and time of user creation.
- `actions` (array): List of actions performed by the user (not yet implemented).

---

## Documentação do Projeto Backend: Criação de Usuários e Posts

Bem-vindo à documentação do projeto Backend de Criação de Usuários e Posts. Este projeto implementa um sistema onde os usuários podem se registrar, fazer login e criar posts.

### Índice

1.  Requisitos e Configuração

    - Requisitos do Sistema
    - Instalação
    - Configuração do Banco de Dados

2.  Estrutura de Pastas e Arquivos

    - Descrição da Organização de Pastas
    - Arquivos Principais

3.  Endpoints e Funcionalidades

    - `/auth/register` - Registro de Usuário
    - `/auth/login` - Login de Usuário
    - `/posts/create` - Criação de Post
    - `/posts/:id` - Exclusão de Post
    - `/posts/all`- Listagem de Posts

4.  Autenticação e Autorização

    - Middleware de Autenticação
    - Autorização para Criação e Exclusão de Posts

### Estrutura de Pastas

```
project-backend/
├── controllers/
│   ├── authController.js
│   ├── postController.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Post.js
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
├── app.js
```

### Configuração do Projeto

1. Clone este repositório em sua máquina local.
2. Execute `npm install` para instalar as dependências.
3. Crie um arquivo `.env` na raiz do projeto e defina uma chave secreta para o JWT:

```plaintext
JWT_SECRET=seu_token_secreto
```

### Registro e Autenticação de Usuários

#### 1. Rota de Registro: `POST /auth/register`

Permite que os usuários se registrem no sistema.

#### 2. Rota de Login: `POST /auth/login`

Permite que os usuários façam login e recebam um token JWT.

### Criação e Gerenciamento de Posts

#### 1. Rota de Criação de Post: `POST /posts/create`

Permite que os usuários autenticados criem novos posts.

#### 2. Rota de Deleção de Post: `DELETE /posts/:id`

Permite que os usuários autenticados excluam seus próprios posts.

### Executando o Projeto

1. Execute `npm start` para iniciar o servidor.
2. Use ferramentas como o [Postman](https://www.postman.com/) para testar as rotas.

---

### Considerações Finais

Este projeto serve como um exemplo de criação de um sistema de Backend para registro, autenticação e gerenciamento de posts. Lembre-se de adaptar o código e a estrutura para atender às necessidades específicas do seu projeto.

Isso conclui a documentação do projeto Backend de Criação de Usuários e Posts. Se você tiver alguma dúvida ou precisar de mais informações, consulte o código-fonte e as seções relevantes acima.

### Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

</div>
