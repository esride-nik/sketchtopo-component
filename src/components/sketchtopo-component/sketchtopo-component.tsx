import { Component, Prop, Watch, h } from '@stencil/core';
import { Geometry } from '@arcgis/core/geometry';
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";

@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {

  @Prop() checkGeometries: Geometry[];
  @Prop() position: "bottom-leading"|"bottom-left"|"bottom-right"|"bottom-trailing"|"top-leading"|"top-left"|"top-right"|"top-trailing"|"manual";
  @Prop() referenceElement: string;
  @Prop() view: __esri.MapView | __esri.SceneView;
  
  @Watch('checkGeometries')
  watchGeometries(newValue: Geometry[], oldValue: Geometry[]) {
    console.log('The old value of checkGeometries is: ', oldValue);
    console.log('The new value of checkGeometries is: ', newValue);
  }

  connectedCallback(c: any) {
    console.log("checkGeometries", this.checkGeometries);
    console.log("position", this.position);
    console.log("referenceElement", this.referenceElement);
    console.log("view", this.view);
  }

  private getText(): string {
    return JSON.stringify(this.checkGeometries);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
