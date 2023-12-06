import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Geometry } from '@arcgis/core/geometry';

@Component({
  tag: 'sketchtopo-component',
  styleUrl: 'sketchtopo-component.css',
  shadow: true,
})
export class SketchTopoComponent {

  @Prop() banana: string;
  @Prop() checkGeometries: Geometry[];
  @Prop() middle: string;
  @Prop() last: string;

  connectedCallback(c: any) {
    console.log("connectedCallback", this.checkGeometries, c)
  }

  private getText(): string {
    return format(JSON.stringify(this.checkGeometries), this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
