import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Geometry } from '@arcgis/core/geometry'

@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {

  private checkGeometries: Geometry[]
  
  @Prop() banana: string;
  @Prop() checkgeostr: string;
  @Prop() middle: string;
  @Prop() last: string;

  connectedCallback(c: any) {
    // const localJson = '[{\"type\":\"point\",\"x\": -0.178,\"y\": 51.48791,\"z\": 1010}]'
    const replaced = this.checkgeostr.replace(/\\"/g, '"'); 
    this.checkGeometries = JSON.parse(replaced)
    // this.checkGeometries = JSON.parse(localJson.replace('\"', '"'))
    // this.checkGeometries = JSON.parse(this.checkgeostr.replace('\"', '"'))
    console.log("connectedCallback", c, this.checkGeometries)
  }

  private getText(): string {
    return format(this.checkGeometries?.length.toString(), this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
