var Walker = require("./walker");
// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise
<<<<<<< HEAD:object-creation-patterns/exercises/inheritance/src/living-criature.js
function LivingCriature (initialOxygen, legs) {


    if (typeof initialOxygen !== 'number') {
        throw new Error('the oxygen provided is not a number');
    }

    if (initialOxygen < 0) {
        throw new Error('the oxygen provided is not a number');
    }

    this.oxigen = initialOxygen;

    if(legs === undefined) {
        return;
    }

    Walker.call(this, legs);
}

LivingCriature.prototype = Object.create(Walker.prototype);
LivingCriature.prototype.constructor = LivingCriature;


LivingCriature.prototype.getRemainingOxygen = function () {
    return this.oxigen;
};

LivingCriature.prototype.breath = function () {
    if(this.hasDied()) {
        throw new Error('it has died');
    }

    this.oxigen += 1;
};

LivingCriature.prototype.consumeOxygen = function () {
    if(this.hasDied()) {
        throw new Error('it has died');
    }

    this.oxigen -= 1;

};

LivingCriature.prototype.hasDied = function () {
    if (this.oxigen === 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = LivingCriature;
=======
function LivingCreature() {
}

module.exports = LivingCreature;
>>>>>>> upstream/master:object-creation-patterns/exercises/inheritance/src/living-creature.js
