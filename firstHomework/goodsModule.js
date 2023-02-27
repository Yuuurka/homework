class Goods{
    name = ""
    price = 0
    quantity = 0
    description = ""

    constructor(name, price, quantity, description) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
    }

}


function selection(searchString, arrGoods){
    let arrSelGoods = []
    const arrDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    let params = searchString.split(/[\s&-]/)
    let nameParam = ((params.indexOf("name") !== -1) ? params[params.indexOf("name")+1] : "") ?? ""
    let nameValue = ((nameParam === "") ? "" : params[params.indexOf(nameParam)+1]) ?? ""
    let priceParam = ((params.indexOf("price") !== -1) ? params[params.indexOf("price")+1].slice(0, 2) : "") ?? ""
    let priceValue = ((priceParam === "") ? 0 : params[params.indexOf("price")+1].slice(1, params[params.indexOf("price")+1].length)) ?? 0
    let quantityParam = ((params.indexOf("quantity") !== -1) ? params[params.indexOf("quantity")+1].slice(0, 2): "") ?? ""
    let quantityValue = ((quantityParam === "") ? 0 : params[params.indexOf("quantity")+1].slice(1, params[params.indexOf("quantity")+1].length)) ?? 0
    let descriptionParam = ((params.indexOf("description") !== -1) ? params[params.indexOf("description")+1] : "") ?? ""
    let descriptionValue = ((descriptionParam === "") ? "" : params[params.indexOf(descriptionParam)+1]) ?? ""

    priceValue = String(priceValue)
    quantityValue = String(quantityValue)
    for (let i = 0; i <= 1; i++){
        if (arrDigits.indexOf(priceValue[i]) === -1){
            priceValue = priceValue.replace(priceValue[i], "")
        }
        if (arrDigits.indexOf(quantityValue[i]) === -1){
            quantityValue = quantityValue.replace(quantityValue[i], "")
        }
    }

    priceValue = Number(priceValue)
    quantityValue = Number(quantityValue)

    for (let goods of arrGoods){
        let condition1 = true
        if (nameParam === "starts") {
            condition1 = goods.name.slice(0, nameValue.length) === nameValue
        }else if (nameParam === "contains"){
            condition1 = goods.name.includes(nameValue)
        }else if (nameParam === "ends"){
            condition1 = goods.name.slice(-nameValue.length, goods.name.length) === nameValue
        }

        let condition2 = true
        if (priceParam === "<="){
            condition2 = goods.price <= priceValue
        }else if (priceParam === ">="){
            condition2 = goods.price >= priceValue
        }else if (priceParam[0] === "="){
            condition2 = goods.price === priceValue
        }else if (priceParam[0] === "<"){
            condition2 = goods.price < priceValue
        }else if (priceParam[0] === ">"){
            condition2 = goods.price > priceValue
        }

        let condition3= true
        if (quantityParam === "<="){
            condition3 = goods.quantity <= quantityValue
        }else if (quantityParam === ">="){
            condition3 = goods.quantity >= quantityValue
        }else if (quantityParam[0] === "="){
            condition3 = goods.quantity === quantityValue
        }else if (quantityParam[0] === "<"){
            condition3 = goods.quantity < quantityValue
        }else if (quantityParam[0] === ">"){
            condition3 = goods.quantity > quantityValue
        }

        let condition4 = true
        if (descriptionParam === "starts") {
            condition4 = goods.description.slice(0, descriptionValue.length-1) === descriptionValue
        }else if (descriptionParam === "contains"){
            condition4 = goods.description.includes(descriptionValue)
        }else if (descriptionParam === "ends"){
            condition4 = goods.description.slice(-descriptionValue.length, goods.description.length) === descriptionValue
        }

        if (condition1 && condition2 && condition3 && condition4){
            arrSelGoods.push(goods)
        }
    }

    return arrSelGoods
}


const computer1 = new Goods("Asusfd123", 69900, 10, "Игровой")
const computer2 = new Goods("Acer123", 10900, 5, "Для офиса")
const mouse1 = new Goods("Ryzen777", 5990, 6, "Игровая abc")
const mouse2 = new Goods("fd45", 299, 7, "Для офиса abc")
const keyboard1 = new Goods("fdkey1", 299, 5, "Для офиса abc")
const keyboard2 = new Goods("fdkey2", 299, 6, "Для офиса abc")

const arrGoods = [computer1, computer2, mouse1, mouse2, keyboard1, keyboard2]
const str1 = "name-contains-fd&price-=299&quantity->5&description-ends-abc"
const str2 = "name-starts-fd&quantity-=5"
const str3 = "name-starts-fd&quantity->=5"
const str4 = "name-contains-fd&price-<=70000&quantity->=5"

// console.log(selection(str1, arrGoods))
// console.log(selection(str2, arrGoods))
// console.log(selection(str3, arrGoods))
// console.log(selection(str4, arrGoods))