/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Nik1Cmp {
    }
    interface SketchtopoComponent {
        "banana": string;
        "checkgeostr": string;
        "last": string;
        "middle": string;
    }
}
declare global {
    interface HTMLNik1CmpElement extends Components.Nik1Cmp, HTMLStencilElement {
    }
    var HTMLNik1CmpElement: {
        prototype: HTMLNik1CmpElement;
        new (): HTMLNik1CmpElement;
    };
    interface HTMLSketchtopoComponentElement extends Components.SketchtopoComponent, HTMLStencilElement {
    }
    var HTMLSketchtopoComponentElement: {
        prototype: HTMLSketchtopoComponentElement;
        new (): HTMLSketchtopoComponentElement;
    };
    interface HTMLElementTagNameMap {
        "nik1-cmp": HTMLNik1CmpElement;
        "sketchtopo-component": HTMLSketchtopoComponentElement;
    }
}
declare namespace LocalJSX {
    interface Nik1Cmp {
    }
    interface SketchtopoComponent {
        "banana"?: string;
        "checkgeostr"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface IntrinsicElements {
        "nik1-cmp": Nik1Cmp;
        "sketchtopo-component": SketchtopoComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nik1-cmp": LocalJSX.Nik1Cmp & JSXBase.HTMLAttributes<HTMLNik1CmpElement>;
            "sketchtopo-component": LocalJSX.SketchtopoComponent & JSXBase.HTMLAttributes<HTMLSketchtopoComponentElement>;
        }
    }
}
