import { LawyerPage } from './app.po';

describe('lawyer App', () => {
  let page: LawyerPage;

  beforeEach(() => {
    page = new LawyerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
