# Conceitos do Node Js

## O que é Node?

- **Javascript** no back-end;
    - Não lidamos com eventos do usuário final;
    - Rotas e integrações;

- Node é uma plataforma _(Não uma linguagem)_;
- Construída em cima da V8;
- Comparável a PHP/Ruby/Python/Go;

## O que é NPM?

- Instalar bibliotecas de terceiros;
- Fornecedor de bibliotecas;
- Por que utilizar o _Yarn_?
    - Contém mais velocidade;
    - Contém muito mais ferramentas que o npm;
- Comparáveis:
    - Composer do PHP;
    - Gems do Ruby;
    - PIP do Python;

## Características do NODE

- Arquitetura Event-Loop
    - Baseada em enventos_(Rotas na maioria das vezes)_;
    - Call stack_(Pilha de eventos)_
- Node single-thread
    - C++ por trás do libuv;
    - Background threads;
-Non-blocking I/O;

## Frameworks

- Nesse projeto será utilizado:
    - ExpressJS como base:
        - Sem opnião;
        - ótimo para iniciar;
        - Micro-Serviços;
- Frameworks opinados:
    - AdonisJS;
    - NestJS;