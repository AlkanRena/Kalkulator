import { KalkulatorPage } from './app.po';

describe('kalkulator App', function() {
  let page: KalkulatorPage;

  beforeEach(() => {
    page = new KalkulatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
