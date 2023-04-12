module.exports = class Machine {
    constructor() {
        this.depositedMoney = 0
        this.billsAccepted = [500,100,50,20,10] 
    }
    //This is the Array of Available Items
    selections = [{'crisps': 70}, {'chocolate': 355}, {'mints': 130}]
    //This Method resets state to perfrom other tests
    resetMachine = () => this.depositedMoney = 0
    //This Method displays array of all available items
    seeSelections = () => this.selections
    //This Method lets user deposit money
    deposit = (money)=>{
        if(this.billsAccepted.includes(money)){
            this.depositedMoney += money
            return `You have deposited Rs ${this.depositedMoney}`
        }else{
            return "Please input bills like 10,20,50 etc"
        }
    }
    //This Method lets user buy items they like
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
            return typeof changeBills === 'string' ? 'Cannot return proper change.  Please choose another item or cancel the transaction' : receipt
          }
      }else{
          return "The item you selected is unavailable"
      }  
      }
    //This Method calculates change 
    changeCalculator = (amount) => {
        let bills = []
        for (const bill of this.billsAccepted) {
            while(amount >= bill){
                amount -= bill
                bills.push(bill)
            }
        }
        return amount !== 0 ? "invalid" : bills
    }
    //This Method lets user cancel transaction and return their deposited money
    cancel = () => {
        let change = this.changeCalculator(this.depositedMoney)
        return {change : change}
    }
};