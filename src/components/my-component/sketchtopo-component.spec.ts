import { newSpecPage } from '@stencil/core/testing';
import { SketchTopoComponent } from './sketchtopo-component';

describe('sketchtopo-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SketchTopoComponent],
      html: '<sketchtopo-component></sketchtopo-component>',
    });
    expect(root).toEqualHtml(`
      <sketchtopo-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sketchtopo-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SketchTopoComponent],
      html: `<sketchtopo-component first="Stencil" last="'Don't call me a framework' JS"></sketchtopo-component>`,
    });
    expect(root).toEqualHtml(`
      <sketchtopo-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sketchtopo-component>
    `);
  });
});
