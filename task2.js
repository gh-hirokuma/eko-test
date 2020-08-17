function equalShiftAmount(input) {
    const ORIGINAL = input

    const shift = (input) => {
        const strArray = Array.from(input)
        const shifted = strArray.pop()
        strArray.unshift(shifted)
        shiftedStr = strArray.join('')

        if (shiftedStr === ORIGINAL) return 1
        return 1 + shift(shiftedStr)
    }

    return shift(input)
}

console.log(equalShiftAmount("ekoapp"))
console.log(equalShiftAmount("ekoeko"))