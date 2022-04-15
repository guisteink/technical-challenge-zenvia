# technical-challenge-zenvia

## proposta de solução do teste
    Uma API Rest a qual conterá n endpoints necessários para retornar os objetivos do desafio escolhido. 
    Exemplo de desafio com Caixa eletrônico: Um endpoint que recebe método POST com o valor do saque no body da requisição, e que retorna 
    statusCode = 200 para caso seja possivel sacar aquele valor com as notas disponiveis no caixa, e retorne 400 caso 
    não haja essa possibilidade. Tendo em vista que o nosso algoritmo (na camada de regra de negócio) que determinará
    essa possibilidade de saque. Nos atentando também ao fato de que as notas disponiveis são de 100, 50, 20 e 10, alguns
    valores pequenos não serão passives de saque.
## para rodar
npm install && npm start

## Authors

- [@guisteink](https://www.github.com/guisteink)

