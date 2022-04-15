const helper = require('../../handler/helper')

class JokenpoController
{
    constructor()
    {
        this.helper = helper;
    }

    play(req, res)
    {
        const { player1, player2 } = req.body;

        if (!player1 || !player2 || !this.helper.isValidPossibilitie(player1) || !this.helper.isValidPossibilitie(player2)) return res.status(400).send("Bad request")
        console.log('\nJokenpo!!!')
        console.log('Player 1 jogou: ', player1)
        console.log('Player 2 jogou: ', player2)
        player1 = player1.toLowerCase()
        player2 = player2.toLowerCase()
        switch (player1) {
            case 'Pedra':
                switch (player2) {
                    case 'Pedra':
                        return res.status(200).send({ "Result": "Empate" })
                    case 'Papel':
                        return res.status(200).send({ "Result": "Vitória do player 2" })
                    case 'Tesoura':
                        return res.status(200).send({ "Result": "Vitória do player 1" })
                }
                break;

            case 'Papel':
                switch (player2) {
                    case 'Pedra':
                        return res.status(200).send({ "Result": "Vitória do player 1" })
                    case 'Papel':
                        return res.status(200).send({ "Result": "Empate" })
                    case 'Tesoura':
                        return res.status(200).send({ "Result": "Vitória do player 2" })
                }
                break;

            case 'Tesoura':
                switch (player2) {
                    case 'Pedra':
                        return res.status(200).send({ "Result": "Vitória do player 2" })
                    case 'Papel':
                        return res.status(200).send({ "Result": "Vitória do player 1" })
                    case 'Tesoura':
                        return res.status(200).send({ "Result": "Empate" })
                }
                break;
        }
    }

}

module.exports = new JokenpoController();