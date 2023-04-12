module.exports = class Machine {
    constructor() {
        this.depositedMoney = 0
        this.billsAccepted = [10,20,30,40,50,100] 
    }

    selections = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}]

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
        let available = Object.keys(this.selections)
        if(!available.includes(name)){
            return "The item you selected is unavailable"
        }else{

        }
    }
};