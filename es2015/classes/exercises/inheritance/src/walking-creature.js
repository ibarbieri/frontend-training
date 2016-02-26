// * exports
// - default: class
// * inherits from
// - LivingCreature
// - Walker
// * constructor parameters:
// - the ones required to be passed to their ancestor
// * methods
// - walk
//   - must throw an exception if it has died
//   - must consume oxygen and walk
import Walker from "./walker";


class WalkingCreature extends Walker {
    constructor() {
        super();
    }
}

export default WalkingCreature;
