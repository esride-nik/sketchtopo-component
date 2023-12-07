/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Geometry } from "@arcgis/core/geometry";
export { Geometry } from "@arcgis/core/geometry";
export namespace Components {
    interface SketchtopoComponent {
        "checkGeometries": Geometry[];
        "position": 'bottom-leading' | 'bottom-left' | 'bottom-right' | 'bottom-trailing' | 'top-leading' | 'top-left' | 'top-right' | 'top-trailing' | 'manual';
        "referenceElement": string;
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
        "checkGeometries"?: Geometry[];
        "position"?: 'bottom-leading' | 'bottom-left' | 'bottom-right' | 'bottom-trailing' | 'top-leading' | 'top-left' | 'top-right' | 'top-trailing' | 'manual';
        "referenceElement"?: string;
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
