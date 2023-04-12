const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 70}, {'chocolate': 355}, {'mints': 130}];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(actual).toEqual(expected);
    });

    it('should let deposit money', () => {
        // setup
        const machine = new Machine();
        const expected = "You have deposited Rs 100";

        // exercise
        const actual = machine.deposit(100);

        // assert
        expect(actual).toEqual(expected);
    });

    it('should let deposit money again', () => {
        // setup
        const machine = new Machine();
        machine.resetMachine()
        const expected = "You have deposited Rs 150";
        machine.deposit(100);

        // exercise
        let actual = machine.deposit(50)

        // assert
        expect(actual).toEqual(expected);
    });

    it('should check if item is available', () => {
        // setup
        const machine = new Machine();
        machine.resetMachine()
        const expected = "The item you selected is unavailable";

        // exercise
        let actual = machine.selectItem("gum")

        // assert
        expect(actual).toEqual(expected);
    });

    it('should check if item price is more than money deposited', () => {
        // setup
        const machine = new Machine();
        machine.resetMachine()
        const expected = "Your deposit is insufficient.  Please add Rs 30 for this item";
        machine.deposit(100)

        // exercise
        let actual = machine.selectItem("mints")

        // assert
        expect(actual).toEqual(expected);
    });

    it('should return change on successfull transaction', () => {
        // setup
        const machine = new Machine();
        machine.resetMachine()
        const expected = {item : 'crisps', change : [20,10]};
        machine.deposit(100)

        // exercise
        let actual = machine.selectItem("crisps")

        // assert
        expect(actual).toEqual(expected);
    });

    it('should return money on cancel button', () => {
        // setup
        const machine = new Machine();
        machine.resetMachine()
        const expected = {change : [100]};
        machine.deposit(100)

        // exercise
        let actual = machine.cancel()

        // assert
        expect(actual).toEqual(expected);
    });

    it('should return money on cancel button', () => {
        // setup
        const machine = new Machine();
        machine.resetMachine()
        const expected = 'Cannot return proper change.  Please choose another item or cancel the transaction';
        machine.deposit(500)

        // exercise
        let actual = machine.selectItem("chocolate")

        // assert
        expect(actual).toEqual(expected);
    });

});
