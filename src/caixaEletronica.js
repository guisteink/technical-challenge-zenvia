function eCaixa(saque)
{
    return getSaque(saque, 0);
}

let notas = [100, 50, 20, 10]

// percorre o array de notas e pega a maior possivel
const getIndexNotaMax = (valor, index) =>
{
    while (notas[index] > valor && index < notas.length) index++;
    return index;
}

const getSaque = (valor, index) =>
{
    let i = 0, j = 0;
    let indexMax = getIndexNotaMax(valor, index);

    if (indexMax >= notas.length) return [];

    // percorre adicionando os maiores valores possiveis
    for (i = indexMax; i < notas.length; i++) {
        let rest = valor - notas[i]

        if (rest === 0) return [notas[i]];

        for (j = i; j < notas.length; j++) {
            let saqueRest = getSaque(rest, j);

            if (saqueRest.length > 0) {
                saqueRest.unshift(notas[i]);
                return saqueRest;
            }
        }
    }
    return [];
}

let result = eCaixa(72)

console.log(result.length > 0 ? ("Notas -> " + result) : 'Não foi possivel fazer o saque!')
