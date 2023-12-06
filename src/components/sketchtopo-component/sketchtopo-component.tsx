import { Component, Prop, h } from '@stencil/core';
import { Geometry } from '@arcgis/core/geometry';

@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {

  @Prop() checkGeometries: Geometry[];

  connectedCallback(c: any) {
    console.log("connectedCallback", this.checkGeometries, c)
  }

  private getText(): string {
    return JSON.stringify(this.checkGeometries);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
