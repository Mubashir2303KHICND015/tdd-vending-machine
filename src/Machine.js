module.exports = class Machine {
    constructor() {
        this.depositedMoney = 0
        this.billsAccepted = [500,100,50,20,10] 
    }

    selections = [{'crisps': 70}, {'chocolate': 350}, {'mints': 130}]

    resetMachine = () => this.depositedMoney = 0

    seeSelections = ()=>this.selections

    deposit = (money)=>{
        if(this.billsAccepted.includes(money)){
            this.depositedMoney += money
            return `You have deposited Rs ${this.depositedMoney}`
        }else{
            return "Please input bills like 10,20,50 etc"
        }
    }

    selectItem = (name)=>{
        let availableItems = this.selections.map(item => Object.keys(item)[0])
        if(availableItems.includes(name)){
          let selecteditem = this.selections.find(item=>item.hasOwnProperty(name))
          let price = selecteditem[name]
          if(price > this.depositedMoney){
              let difference = price - this.depositedMoney
              return `Your deposit is insufficient.  Please add Rs ${difference} for this item`
          }else{
            let change = this.depositedMoney - price
            let changeBills = this.changeCalculator(change)
            let receipt = {item : name , change : changeBills}
            return receipt
          }
      }else{
          return "The item you selected is unavailable"
      }  
      }

    changeCalculator = (amount) => {
        let bills = []
        for (const bill of this.billsAccepted) {
            while(amount >= bill){
                amount -= bill
                bills.push(bill)
            }
        }
        return bills
    }
};