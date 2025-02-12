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