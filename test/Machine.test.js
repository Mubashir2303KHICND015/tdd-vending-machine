const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

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

});
