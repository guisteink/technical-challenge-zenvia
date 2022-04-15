
class CaixaEletronicoController
{
    constructor()
    {
        this.notas = [100, 50, 20, 10]
    }

    getIndexNotaMax(valor, index)
    {
        while (this.notas[index] > valor && index < this.notas.length) index++;
        return index;
    }

    setSaque(valor, index)
    {
        let i = 0, j = 0;
        let indexMax = this.getIndexNotaMax(valor, index);
        if (indexMax >= this.notas.length) return [];

        // percorre adicionando os maiores valores possiveis
        for (i = indexMax; i < this.notas.length; i++) {
            let rest = valor - this.notas[i]

            if (rest === 0) return [this.notas[i]];

            for (j = i; j < this.notas.length; j++) {
                let saqueRest = this.setSaque(rest, j);

                if (saqueRest.length > 0) {
                    saqueRest.unshift(this.notas[i]);
                    return saqueRest;
                }
            }
        }
        return [];
    }

    saque(req, res)
    {
        const { valor } = req.body;
        if (!valor || !isValidValue(valor)) res.status(400).send("Bad request")
        let valorDeSaque = this.setSaque(valor, 0);
        return valorDeSaque.length > 0 ?
            res.status(200).send({ "Result": valorDeSaque }) : res.status(400).json({ "Result": "Não foi possível fazer o saque desse valor" });
    }

}

module.exports = new CaixaEletronicoController();