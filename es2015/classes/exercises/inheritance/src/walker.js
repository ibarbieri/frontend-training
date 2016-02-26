// * exports
// - default: class
// * constructor parameters
// - legs: the amount of legs the walker has
// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done
import LivingCreature from "./living-creature";


class Walker extends LivingCreature {
    constructor(legs) {
        super();

        this._legs = legs;
        this._steps = null;
    }

    getLegs() {
        if (typeof this._legs !== 'number') {
            throw new Error('The amount of legs provided is not a number');
        }

        return this._legs;
    }

    getSteps() {
        return this._steps;
    }

    walk() {
        this._steps += 1;
    }
}

export default Walker;
