# API Rest

# Como funciona uma API?
- Fluxo de requisição e resposta:
    - Requisição feita por um cliente;
    - Resposta retornada através de uma estrutura de dados;
    - Cliente recebe resposta e processa resultado;
- As rotas utilizam métodos HTTP;
    - _GET http://minhaapp.com/users;_
    - _POST http://minhaapp.com/users;_
    - _PUT http://minhaapp.com/users/1;_
    - _DELETE http://minhaapp.com/users/1;_

# Benefícios
- Múltiplos clientes(front-end), mesmo back-end;
- Protocolo de comunicação padronizado
    - Mesma estrutura para web / mobile / API Pública;
    - Comunicação com serviçoes externos;

# HTTP Codes

- 1xx: Informational;
- 2xx:: Sucess:
    - 200: SUCESS;
    - 201: CREATED;
- 3xx: Redirection:
    - 301: MOVED PERMANENTLY;
    - 302: MOVED;
- 4xx: Client Error:
    - 400: BAD REQUEST;
    - 401: UNAUTHORIZED;
    - 404: NOT FOUND;
- 5xx: Server Error:
    500: INTERNAL SERVER ERROR;