class Error
{
    constructor() { }

    static isValidPossibilitie(option)
    {
        let possibilities = ['pedra', 'papel', 'tesoura']
        return (possibilities.includes(option.toLowerCase()))
    }

    static isValidValue(value) 
    {
        if (typeof value === "number") return true
        return false
    }
}

module.exports = Error;
