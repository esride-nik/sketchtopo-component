export * from './components';

// settings props like here:  https://gilfink.medium.com/using-complex-objects-arrays-as-props-in-stencil-components-f2d54b093e85
var cmp = document.querySelector('sketchtopo-component');
// cmp.checkGeometries = [{"geometry":{"type":"point","x":-0.178,"y":51.48791,"z":1010},"symbol":{"type":"simple-marker","color":[226,119,40],"outline":{"color":[255,255,255],"width":2}}}]
cmp.checkGeometries = [{"type":"point","x":-0.178,"y":51.48791,"z":1010} as __esri.Point]