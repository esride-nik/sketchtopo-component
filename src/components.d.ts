/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SketchtopoComponent {
        "checkThese": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLSketchtopoComponentElement extends Components.SketchtopoComponent, HTMLStencilElement {
    }
    var HTMLSketchtopoComponentElement: {
        prototype: HTMLSketchtopoComponentElement;
        new (): HTMLSketchtopoComponentElement;
    };
    interface HTMLElementTagNameMap {
        "sketchtopo-component": HTMLSketchtopoComponentElement;
    }
}
declare namespace LocalJSX {
    interface SketchtopoComponent {
        "checkThese"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "sketchtopo-component": SketchtopoComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sketchtopo-component": LocalJSX.SketchtopoComponent & JSXBase.HTMLAttributes<HTMLSketchtopoComponentElement>;
        }
    }
}
