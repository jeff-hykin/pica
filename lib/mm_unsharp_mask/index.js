'use strict';var module = module||{};module.exports=module.exports||{};
'use strict';

import fn from "./unsharp_mask.js"
import wasm_fn from "./unsharp_mask_wasm.js"
import wasm_src from "./unsharp_mask_wasm_base64.js"

module.exports = {
  name:     'unsharp_mask',
  fn,
  wasm_fn,
  wasm_src,
};

;export default module.exports