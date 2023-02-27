function sumn(Number1, Number2){
    const bigInt1 = BigInt(Number1)
    const bigInt2 = BigInt(Number2)

    return Number(bigInt1 + bigInt2)
}


function subn(Number1, Number2){
    const bigInt1 = BigInt(Number1)
    const bigInt2 = BigInt(Number2)

    return Number(bigInt1 - bigInt2)
}


function muln(Number1, Number2){
    const bigInt1 = BigInt(Number1)
    const bigInt2 = BigInt(Number2)

    return Number(bigInt1 * bigInt2)
}


function divn(Number1, Number2){
    const bigInt1 = BigInt(Number1)
    const bigInt2 = BigInt(Number2)

    return Number(bigInt1 / bigInt2)
}

// console.log(sumn(1234567890123456789012345678901234567890, 1234567890123456789012345678901234567890))
// console.log(subn(1234567890123456789012345678901234567890, 1234567890123456789012345678901234567890))
// console.log(muln(1234567890123456789012345678901234567890, 1234567890123456789012345678901234567890))
// console.log(divn(1234567890123456789012345678901234567890, 1234567890123456789012345678901234567890))