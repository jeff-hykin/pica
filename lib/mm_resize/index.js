'use strict';module = module||{};module.exports=module.exports||{};
'use strict';

import fn from "./resize.js"
import wasm_fn from "./resize_wasm.js"
import wasm_src from "./convolve_wasm_base64.js"

module.exports = {
  name:     'resize',
  fn,
  wasm_fn,
  wasm_src,
};

;export default module.exports