'use strict';module = module||{};module.exports=module.exports||{};
// Collection of math functions
//
// 1. Combine components together
// 2. Has async init to load wasm modules
//
'use strict';


import Multimath from "https://esm.sh/multimath@2.0.0" /* CHECKME: unknown that was prefixed */

import mm_unsharp_mask from "./mm_unsharp_mask/index.js"
import mm_resize from "./mm_resize/index.js"


function MathLib(requested_features) {
  const __requested_features = requested_features || [];

  let features = {
    js:   __requested_features.indexOf('js') >= 0,
    wasm: __requested_features.indexOf('wasm') >= 0
  };

  Multimath.call(this, features);

  this.features = {
    js:   features.js,
    wasm: features.wasm && this.has_wasm()
  };

  this.use(mm_unsharp_mask);
  this.use(mm_resize);
}


MathLib.prototype = Object.create(Multimath.prototype);
MathLib.prototype.constructor = MathLib;


MathLib.prototype.resizeAndUnsharp = function resizeAndUnsharp(options, cache) {
  let result = this.resize(options, cache);

  if (options.unsharpAmount) {
    this.unsharp_mask(
      result,
      options.toWidth,
      options.toHeight,
      options.unsharpAmount,
      options.unsharpRadius,
      options.unsharpThreshold
    );
  }

  return result;
};


module.exports = MathLib;

;export default module.exports