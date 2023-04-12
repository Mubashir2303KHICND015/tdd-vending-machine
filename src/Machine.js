module.exports = class Machine {
    constructor() {
        this.depositedMoney = 0
        this.billsAccepted = [10,20,30,40,50,100] 
    }

    selections = [{'crisps': 100}, {'chocolate': 350}, {'mints': 130}]

    resetMachine = () => this.depositedMoney = 0

    seeSelections = ()=>this.selections

    deposit = (money)=>{
        if(this.billsAccepted.includes(money)){
            this.depositedMoney += money
            return `You have deposited Rs ${this.depositedMoney}`
        }else{
            return "Please input bills like 10,20,30 etc"
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
          }
      }else{
          return "The item you selected is unavailable"
      }  
      }
};