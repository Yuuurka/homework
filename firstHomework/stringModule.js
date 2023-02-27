function toLowerRegister(preString){
    return preString[0].toUpperCase() + preString.slice(1, preString.length).toLowerCase()
}

// console.log(toLowerRegister("ABCDEF"))
// console.log(toLowerRegister("Hello, World!"))
// console.log(toLowerRegister("fOOO"))

function formatString(notFormattedString){
    const punctuationMarks = [',', '.', '!', '?', ':', ';', '(', ')']
    let i = 0;
    let formattedString = ""
    notFormattedString += " "
    while (i !== notFormattedString.length-1) {
        if ((notFormattedString[i] === " " && notFormattedString[i - 1] === " ") ||
            (notFormattedString[i] === " " && punctuationMarks.indexOf(notFormattedString[i+1]) !== -1)) {

            notFormattedString = notFormattedString.replace(notFormattedString[i], "");

        }else if (punctuationMarks.indexOf(notFormattedString[i]) !== -1 && notFormattedString[i + 1] !== " ") {

            notFormattedString = notFormattedString.replace(notFormattedString[i], notFormattedString[i] + " ");
            formattedString += notFormattedString[i] + notFormattedString[i+1];
            i += 2;

        }else{

            formattedString += notFormattedString[i];
            i++;

        }
    }

    return formattedString
}


// let str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."
// console.log(str)
// console.log(formatString(str))


function countWords(someString){
    someString = formatString(someString)
    const separations = /[\s ,.!?&:;()@#№$%^*-=+_<>`~|'{}]+/
    let arrWords = someString.split(separations)

    return arrWords.length
}

// console.log(countWords("Шла Саша Саша !!!!!!!по шоссе и сосала сушку"))
// console.log(countWords("Шла Саша   по шоссе  и   сосала сушку"))
// console.log(countWords("Шла, Саша! по ( шоссе )- и   сосала сушку"))

function quickSort(arr){
    if (arr.length < 2){
        return arr
    }
    let pivot = arr[0]
    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {
        if (parseInt(pivot) > parseInt(arr[i])) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}



function countUniqueWords(someString){
    someString = someString[0].toLowerCase() + formatString(someString.slice(1, someString.length))
    const separations = /[\s ,.!?&:;()@#№$%^*-=+_<>`~|'{}]+/
    let arrWords = someString.split(separations)
    let arrUniqueWords = []
    for (let j = 0; j < arrWords.length; j++){
        let count = 0
        for (let i = 0; i <= arrWords.length; i++){
            if (arrWords[j] === arrWords[i]) {
                count += 1
            }
        }

        if (arrUniqueWords.indexOf(`${count}:  ${arrWords[j]}`) === - 1) {
            arrUniqueWords.push(`${count}:  ${arrWords[j]}`)
            arrWords = arrWords.filter((n) => {return n !== arrWords[j]})
            j--
        }
    }


    return quickSort(arrUniqueWords).reverse()
}

// console.log(countUniqueWords("Текст, в котором слово текст несколько раз встречается и слово тоже"))