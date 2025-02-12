'use strict';module = module||{};module.exports=module.exports||{};
'use strict';

module.exports = {
  name:     'unsharp_mask',
  fn:       require('./unsharp_mask')/* FIXME: can't auto handle deep require (await import('./unsharp_mask')) */,
  wasm_fn:  require('./unsharp_mask_wasm')/* FIXME: can't auto handle deep require (await import('./unsharp_mask_wasm')) */,
  wasm_src: require('./unsharp_mask_wasm_base64')/* FIXME: can't auto handle deep require (await import('./unsharp_mask_wasm_base64')) */
};

;export default module.exports