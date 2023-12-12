import { Component, Prop, Watch, h } from '@stencil/core';
import { Geometry } from '@arcgis/core/geometry';
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import Query from "@arcgis/core/rest/support/Query";
import { r as referenceElementHelper, c as checkForView, a as addHandles } from '@arcgis/map-components/dist/components/component-utils.js';
import Sketch from '@arcgis/core/widgets/Sketch';
import Layer from '@arcgis/core/layers/Layer';

// TODO: for some reason, styles are not applied, although they should be => https://stenciljs.com/docs/styling#styling-with-the-shadow-dom. does this interfere with view.ui?
@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {
  // props
  @Prop({reflect:true}) checkGeometries: __esri.Geometry[];
  @Prop() position: "bottom-leading"|"bottom-left"|"bottom-right"|"bottom-trailing"|"top-leading"|"top-left"|"top-right"|"top-trailing"|"manual";
  @Prop() sketchWidget: __esri.Sketch;

  // class vars
  private view: MapView | SceneView;
  private sketchTopoComponent?: HTMLElement;
  private polygonLayer: FeatureLayer;
  private polygonLayerQuery: Query;
  
  // Watches checkGeometries prop and performs query when it changes
  @Watch('checkGeometries')
  async watchGeometries(newValue: Geometry[], oldValue: Geometry[]) {
    console.log('The old value of checkGeometries is: ', oldValue);
    console.log('The new value of checkGeometries is: ', newValue);

    if (this.polygonLayerQuery === undefined || newValue?.length == 0) return;

    this.polygonLayerQuery.geometry = newValue[0];
    this.polygonLayerQuery.spatialRelationship = 'contains';
    const fCount = await this.polygonLayer.queryFeatureCount(this.polygonLayerQuery);
    this.sketchTopoComponent.innerText =  `Your drawn feature contains ${fCount} features on the layer.`
  }

  // cmp initialization
  private setupComponent(view: MapView | SceneView) {
    this.view = view;
    this.view.ui.add(this.sketchTopoComponent, this.position);

    // Sketch complete callback sets new sketch geometry to checkGeometries prop
    this.sketchWidget.on("create", (c: any) => {
        if (c.state == "complete") {
            console.log(c);
            this.checkGeometries = [c.graphic.geometry];
        }
    })

    // TODO: come up with sth better to get a polygon layer.. probably a prop
    const allFeatureLayers = (this.view.map.allLayers as any).items.filter((l: Layer) => l.type == "feature")
    this.view.whenLayerView(allFeatureLayers[0]).then((lv: FeatureLayerView) => {
      this.polygonLayer = lv.layer; //.geometryType == 'polygon' ? lv.layer as FeatureLayer : undefined;
      lv.layer.popupEnabled = false;
      this.polygonLayerQuery = this.polygonLayer.createQuery();
    }).catch(() => {
      this.sketchTopoComponent.innerText =  "No polygon feature layer found."
    })
  }

  async componentDidLoad() {
    checkForView(this);
  }

  // Reference: https://stenciljs.com/docs/component-lifecycle
  // Called every time the component is connected to the DOM. When the component is first connected, this method is called before componentWillLoad.
  connectedCallback() {
    document.querySelector("arcgis-map")?.addEventListener("viewReady", async (event: any) => {
      this.setupComponent(event.detail.view);
    });
    document.querySelector("arcgis-scene")?.addEventListener("viewReady", async (event: any) => {
      this.setupComponent(event.detail.view);
    });

    console.log("checkGeometries", this.checkGeometries);
    console.log("position", this.position);
  }

  private getText(): string {
    return JSON.stringify(this.checkGeometries);
  }

  render() {
    return <div class="esri-widget" ref={el => this.sketchTopoComponent = el as HTMLElement}>Hello, El! {this.getText()}</div>;
  }
}
