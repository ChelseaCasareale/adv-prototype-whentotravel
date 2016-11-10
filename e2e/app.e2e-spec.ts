import { FinalVerMockPage } from './app.po';

describe('final-ver-mock App', function() {
  let page: FinalVerMockPage;

  beforeEach(() => {
    page = new FinalVerMockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
