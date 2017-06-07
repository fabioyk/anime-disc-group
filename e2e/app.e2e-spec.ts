import { AnimeDiscGroupPage } from './app.po';

describe('anime-disc-group App', () => {
  let page: AnimeDiscGroupPage;

  beforeEach(() => {
    page = new AnimeDiscGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
