

const playJokenpo = (player1, player2) =>
{
    console.log('Jokenpo!!!')
    console.log('Player 1 jogou: ', player1)
    console.log('Player 2 jogou: ', player2)
    switch (player1) {
        case 'Pedra':
            switch (player2) {
                case 'Pedra':
                    console.log('Empate')
                    break;
                case 'Papel':
                    console.log('Vitória do player 2')
                    break;
                case 'Tesoura':
                    console.log('Vitória do player 1')
                    break;
            }
            break;

        case 'Papel':
            switch (player2) {
                case 'Pedra':
                    console.log('Vitória do player 1')
                    break;
                case 'Papel':
                    console.log('Empate')
                    break;
                case 'Tesoura':
                    console.log('Vitória do player 2')
                    break;
            }
            break;

        case 'Tesoura':
            switch (player2) {
                case 'Pedra':
                    console.log('Vitória do player 2')
                    break;
                case 'Papel':
                    console.log('Vitória do player 1')
                    break;
                case 'Tesoura':
                    console.log('Empate')
                    break;
            }
            break;
    }
}

let p1 = possibilities[0]
let p2 = possibilities[2]

playJokenpo(p1, p2)