export * from './components';

// // TODO: do this inside sketchtopo-cmp
// // settings props like here:  https://gilfink.medium.com/using-complex-objects-arrays-as-props-in-stencil-components-f2d54b093e85
// let sketchtopoCmp = document.querySelector('sketchtopo-component');
// let sketchWidget: __esri.Sketch = undefined;
// let sketchCmp = document.querySelector('arcgis-sketch');
// sketchCmp.addEventListener("widgetReady", (evt: CustomEvent<any>) => {
//     console.log("widgetReady", evt);
//     sketchWidget = evt.detail.widget;
//     sketchWidget.on("create", (c: any) => {
//         if (c.state == "complete") {
//             console.log(c);
//             sketchtopoCmp.checkGeometries = [c.graphic.geometry];
//         }
//     })
// })
