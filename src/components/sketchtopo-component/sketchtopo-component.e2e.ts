import { newE2EPage } from '@stencil/core/testing';

describe('sketchtopo-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sketchtopo-component></sketchtopo-component>');
    const element = await page.find('sketchtopo-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<sketchtopo-component></sketchtopo-component>');
    const component = await page.find('sketchtopo-component');
    const element = await page.find('sketchtopo-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('checkThese', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
