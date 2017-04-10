import { MeamAppPage } from './app.po';

describe('meam-app App', function() {
  let page: MeamAppPage;

  beforeEach(() => {
    page = new MeamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
