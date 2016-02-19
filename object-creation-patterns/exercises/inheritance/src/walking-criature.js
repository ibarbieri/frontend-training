var assert = require("assert");

var Walker = require("../src/walker");
var LivingCriature = require("../src/living-criature");

// * inherits from
// - LivingCriature
// - Walker
// * constructor parameters:
// - the ones required to be passed to their ancestor
// * methods
// - walk
//   - must throw an exception if it has died
//   - must consume oxygen and walk
function WalkingCriature(oxigen, legs) {
    LivingCriature.call(this, oxigen, legs);
}

WalkingCriature.prototype = Object.create(LivingCriature.prototype);
WalkingCriature.prototype.constructor = WalkingCriature;

WalkingCriature.prototype.walk = function () {
    if (WalkingCriature.prototype.hasDied.call(this)) {
        throw new Error('it has died');
    }

    Walker.prototype.walk.call(this);

    LivingCriature.prototype.consumeOxygen.call(this);
};




module.exports = WalkingCriature;
