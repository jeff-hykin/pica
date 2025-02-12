'use strict';

import fn from "./unsharp_mask.js"
import wasm_fn from "./unsharp_mask_wasm.js"
import wasm_src from "./unsharp_mask_wasm_base64.js"

const name = 'unsharp_mask'

export default {
  name,
  fn,
  wasm_fn,
  wasm_src,
};