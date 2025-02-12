'use strict';module = module||{};module.exports=module.exports||{};
'use strict';

module.exports = {
  name:     'resize',
  fn:       require('./resize')/* FIXME: can't auto handle deep require (await import('./resize')) */,
  wasm_fn:  require('./resize_wasm')/* FIXME: can't auto handle deep require (await import('./resize_wasm')) */,
  wasm_src: require('./convolve_wasm_base64')/* FIXME: can't auto handle deep require (await import('./convolve_wasm_base64')) */
};

;export default module.exports