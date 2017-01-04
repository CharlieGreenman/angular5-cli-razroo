import { Angular2CliRazrooPage } from './app.po';

describe('angular2-cli-razroo App', function() {
  let page: Angular2CliRazrooPage;

  beforeEach(() => {
    page = new Angular2CliRazrooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
