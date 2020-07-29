//const moneyBox = (coins) => {
//    var saveCoins = 0
//    saveCoins += coins
//    console.log(`MoneyBox: $${saveCoins}`)
//}
//
//moneyBox(5)
//moneyBox(10)

const moneyBox = () => {
    let saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)        
    }    
    return countCoins;
}

let codMoney = moneyBox();
let usdMoney = moneyBox();


codMoney(4)
codMoney(6)
usdMoney(4)
usdMoney(16)
usdMoney(120)
codMoney(10)