import {SharedModule} from './shared.module';

describe('SharedModule', () => {
  let sharedModule: SharedModule;

  beforeEach(() => {
    sharedModule = new SharedModule();
  });

  it('should createGrant an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
