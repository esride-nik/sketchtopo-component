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

    // TODO:  https://gilfink.medium.com/using-complex-objects-arrays-as-props-in-stencil-components-f2d54b093e85
    
    const replaced = this.checkgeostr.replace(/\\"/g, '"'); 
    this.checkGeometries = JSON.parse(replaced)
    console.log("connectedCallback", c, this.checkGeometries)
  }

  private getText(): string {
    return format(this.checkGeometries?.length.toString(), this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
