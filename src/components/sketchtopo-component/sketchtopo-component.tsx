import { Component, Prop, Watch, h } from '@stencil/core';
import { Geometry } from '@arcgis/core/geometry';
import MapView from '@arcgis/core/views/MapView';
import SceneView from '@arcgis/core/views/SceneView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Query from '@arcgis/core/rest/support/Query';

// import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
// defineMapElements();

// TODO: for some reason, styles are not applied, although they should be => https://stenciljs.com/docs/styling#styling-with-the-shadow-dom. does this interfere with view.ui?
@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {
  @Prop() checkGeometries: Geometry[];
  @Prop() position: 'bottom-leading' | 'bottom-left' | 'bottom-right' | 'bottom-trailing' | 'top-leading' | 'top-left' | 'top-right' | 'top-trailing' | 'manual';
  @Prop() referenceElement: string;
  private view: MapView | SceneView;
  private sketchTopoComponent?: HTMLElement;
  private polygonLayer: FeatureLayer;
  private polygonLayerQuery: Query;

  @Watch('checkGeometries')
  async watchGeometries(newValue: Geometry[], oldValue: Geometry[]) {
    console.log('The old value of checkGeometries is: ', oldValue);
    console.log('The new value of checkGeometries is: ', newValue);

    if (this.polygonLayerQuery === undefined || newValue?.length == 0) return;

    this.polygonLayerQuery.geometry = newValue[0];
    this.polygonLayerQuery.spatialRelationship = 'contains';
    const fCount = await this.polygonLayer.queryFeatureCount(this.polygonLayerQuery);
    this.sketchTopoComponent.innerText = `Your drawn feature contains ${fCount} features on the layer.`;
  }

  private setupView(view: MapView | SceneView) {
    this.view = view;
    this.view.ui.add(this.sketchTopoComponent, this.position);

    // TODO: come up with sth better to get a polygon layer.. probably a prop
    const allFeatureLayers = (this.view.map.allLayers as any).items.filter((l: __esri.Layer) => l.type == 'feature');
    this.view
      .whenLayerView(allFeatureLayers[0])
      .then((lv: __esri.FeatureLayerView) => {
        this.polygonLayer = lv.layer; //.geometryType == 'polygon' ? lv.layer as FeatureLayer : undefined;
        lv.layer.popupEnabled = false;
        this.polygonLayerQuery = this.polygonLayer.createQuery();
      })
      .catch(() => {
        this.sketchTopoComponent.innerText = 'No polygon feature layer found.';
      });
  }

  // Reference: https://stenciljs.com/docs/component-lifecycle
  // Called every time the component is connected to the DOM. When the component is first connected, this method is called before componentWillLoad.
  connectedCallback() {
    document.querySelector('arcgis-map')?.addEventListener('viewReady', async (event: any) => {
      this.setupView(event.detail.view);
    });
    document.querySelector('arcgis-scene')?.addEventListener('viewReady', async (event: any) => {
      this.setupView(event.detail.view);
    });

    console.log('checkGeometries', this.checkGeometries);
    console.log('position', this.position);
    console.log('referenceElement', this.referenceElement);
  }

  private getText(): string {
    return JSON.stringify(this.checkGeometries);
  }

  render() {
    return (
      <div class="esri-widget" ref={el => (this.sketchTopoComponent = el as HTMLElement)}>
        {/* <arcgis-sketch /> */}
        {this.getText()}
      </div>
    );
  }
}
