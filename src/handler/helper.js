class Helper
{
    constructor() { }

    static isValidPossibilitie(option)
    {
        let possibilities = ['pedra', 'papel', 'tesoura']
        return (possibilities.includes(option.toLowerCase()))
    }


    static isValidValue(value) 
    {

    }
}

module.exports = Helper;
