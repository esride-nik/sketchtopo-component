import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
// import { loadModules } from "esri-loader";
import Geometry from '@arcgis/core/geometry/Geometry';

@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {
  
  geometry: Geometry;
  
  @Prop() checkThese: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    console.log('getText', this.checkThese, this.middle, this.last);
    return format(this.checkThese, this.middle, this.last);
  }
  
  componentDidLoad() {
    this.createGeometry()
  }

  private createGeometry() {
    console.log('createGeometry');
    // loadModules(["esri/Geometry"]).then(() => {
    //   this.geometry = {
    //     type: "point",
    //     x: 52,
    //     y: 11
    //   } as unknown as Geometry;
    // })
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
