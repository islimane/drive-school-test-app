import { DriveSchoolTestAppPage } from './app.po';

describe('drive-school-test-app App', () => {
  let page: DriveSchoolTestAppPage;

  beforeEach(() => {
    page = new DriveSchoolTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
