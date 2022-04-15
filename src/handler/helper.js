class Helper
{
    constructor() { }

    static isValidPossibilitie(option)
    {
        option = option.toLowerCase()
        let possibilities = ['pedra', 'papel', 'tesoura']
        return (possibilities.includes(option))
    }


    static isValidValue(value) 
    {

    }
}

module.exports = Helper;
