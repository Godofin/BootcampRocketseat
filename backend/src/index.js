//Start with "yarn dev"
const express = require('express'); //importação do express dentro da variável express

const app = express(); //declarando app que é igual a express

app.use(express.json());

app.get('/projects', (request, response) => {
    const query = request.query;

    console.log(query);
    return response.json(['Projeto 1', 'Projeto 2']);
}); //utilização do método get: onde recebe o parâmetro que precisa observar, e dps necessita receber uma função
//com dois parâmetros (requisição e a reposta), dentro dessa função é necessário realizar o retorno da rota

app.post('/projects', (request, response)=>{
    const body = request.body;

    console.log(body);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id', (request, response)=>{
    const params = request.params;

    console.log(params)
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id', (request, response)=>{
    
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.listen(3333, ()=>{
    console.log("🚀 Back-End started!");
}); //conexão em uma porta localhost acima de 80


