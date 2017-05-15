import { MygithubsearchPage } from './app.po';

describe('mygithubsearch App', () => {
  let page: MygithubsearchPage;

  beforeEach(() => {
    page = new MygithubsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
