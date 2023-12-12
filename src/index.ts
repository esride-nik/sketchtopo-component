import Sketch from '@arcgis/core/widgets/Sketch';

export * from './components';

// TODO: how to init the whole Sketch widget (or better use arcgis-sketch) within custom cmp?
// settings props like here:  https://gilfink.medium.com/using-complex-objects-arrays-as-props-in-stencil-components-f2d54b093e85
let sketchtopoCmp = document.querySelector('sketchtopo-component');
let sketchWidget: Sketch = undefined;
let sketchCmp = document.querySelector('arcgis-sketch');

sketchCmp.addEventListener("widgetReady", (evt: CustomEvent<any>) => {
    console.log("widgetReady", evt);
    sketchWidget = evt.detail.widget;
    sketchtopoCmp.sketchWidget = sketchWidget;
})
