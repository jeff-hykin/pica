'use strict';


import _pica from "../index.js"
import assert from "node:assert"

import { describe, it } from "https://deno.land/std@0.224.0/testing/bdd.ts"
import { createCanvas } from "https://deno.land/x/canvas@v1.4.2/mod.ts"

import { isCanvasSymbol } from "../lib/utils.js"
// shim
globalThis.document = {
    createElement: (tag) => {
        if (tag === 'canvas') {
            return {
                ...createCanvas(100, 100),
                [isCanvasSymbol]: true,
                get width() {
                    return this._width;
                },
                get height() {
                    return this._height;
                },
                set width(w) {
                    this._width = w;
                    if (this._height) {
                        let c = createCanvas(this._width, this._height)
                        Object.assign(this, c)
                    }
                },
                set height(h) {
                    this._height = h;
                    if (this._width) {
                        Object.assign(this, createCanvas(this._width, this._height))
                    }
                }
            }
        }
    }
}

describe('API', () => {

  // Need node 8 to run
  it('Upscale (unexpected use) via wasm should not crash', async () => {
    const p = _pica({ features: [ 'wasm' ] });

    const input = new Uint8Array(500 * 500 * 4);

    await p.resizeBuffer({
      src:      input,
      width:    500,
      height:   500,
      toWidth:  1000,
      toHeight: 1000
    });
  });

  it('Should return result in promise', async () => {
    let src = document.createElement('canvas');

    src.width = 1000;
    src.height = 1000;

    let to = document.createElement('canvas');

    to.width = 100;
    to.height = 100;

    const result = await _pica().resize(src, to);
    assert.strictEqual(result, to);
  });

  it('Resize with bad output size should fail', async () => {
    let src = document.createElement('canvas');
    src.width = 1000;
    src.height = 1000;
    let to = document.createElement('canvas');
    to.width = 0;
    to.height = 0;

    await assert.rejects(
      async () => _pica().resize(src, to),
      { message: 'Invalid output size: 0x0' }
    );
  });

});
