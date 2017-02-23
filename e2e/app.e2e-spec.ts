import { AngularRealworldAppPage } from './app.po';

describe('angular-realworld-app App', () => {
  let page: AngularRealworldAppPage;

  beforeEach(() => {
    page = new AngularRealworldAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
