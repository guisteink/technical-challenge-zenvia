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
        switch (player1.toLowerCase()) {
            case 'pedra':
                switch (player2.toLowerCase()) {
                    case 'pedra':
                        return res.status(200).send({ "Result": "Empate" })
                    case 'papel':
                        return res.status(200).send({ "Result": "Vitória do player 2" })
                    case 'tesoura':
                        return res.status(200).send({ "Result": "Vitória do player 1" })
                }
                break;

            case 'papel':
                switch (player2.toLowerCase()) {
                    case 'pedra':
                        return res.status(200).send({ "Result": "Vitória do player 1" })
                    case 'papel':
                        return res.status(200).send({ "Result": "Empate" })
                    case 'tesoura':
                        return res.status(200).send({ "Result": "Vitória do player 2" })
                }
                break;

            case 'tesoura':
                switch (player2.toLowerCase()) {
                    case 'pedra':
                        return res.status(200).send({ "Result": "Vitória do player 2" })
                    case 'papel':
                        return res.status(200).send({ "Result": "Vitória do player 1" })
                    case 'tesoura':
                        return res.status(200).send({ "Result": "Empate" })
                }
                break;
        }
    }

}

module.exports = new JokenpoController();