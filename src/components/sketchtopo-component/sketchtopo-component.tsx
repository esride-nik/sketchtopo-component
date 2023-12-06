import { Component, Host, Prop, Watch, h } from '@stencil/core';
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
  private view: __esri.MapView | __esri.SceneView;
  private sketchTopoComponent?: HTMLElement;
  
  @Watch('checkGeometries')
  watchGeometries(newValue: Geometry[], oldValue: Geometry[]) {
    console.log('The old value of checkGeometries is: ', oldValue);
    console.log('The new value of checkGeometries is: ', newValue);
  }

  private addCmpToUi() {
    this.view.ui.add(this.sketchTopoComponent, this.position);
  }

  // Reference: https://stenciljs.com/docs/component-lifecycle
  // Called every time the component is connected to the DOM. When the component is first connected, this method is called before componentWillLoad.
  connectedCallback() {    
    document.querySelector("arcgis-map")?.addEventListener("viewReady", async (event: any) => {
      this.view = event.detail.view;
      this.addCmpToUi();
    });
    document.querySelector("arcgis-scene")?.addEventListener("viewReady", async (event: any) => {
      this.view = event.detail.view;
      this.addCmpToUi();
    });

    console.log("checkGeometries", this.checkGeometries);
    console.log("position", this.position);
    console.log("referenceElement", this.referenceElement);
  }

  private getText(): string {
    return JSON.stringify(this.checkGeometries);
  }

  render() {
    return <div class="esri-widget" ref={el => this.sketchTopoComponent = el as HTMLElement}>Hello, El! {this.getText()}</div>;
  }
}
