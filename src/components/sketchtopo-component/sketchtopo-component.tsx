import { Component, Prop, Watch, h } from '@stencil/core';
import { Geometry } from '@arcgis/core/geometry';

@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {

  @Prop() checkGeometries: Geometry[];
  
  @Watch('checkGeometries')
  watchGeometries(newValue: Geometry[], oldValue: Geometry[]) {
    console.log('The old value of checkGeometries is: ', oldValue);
    console.log('The new value of checkGeometries is: ', newValue);
  }

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
