import {GrantsModule} from './grants.module';

describe('GrantsModule', () => {
  let newGrantModule: GrantsModule;

  beforeEach(() => {
    newGrantModule = new GrantsModule();
  });

  it('should createGrant an instance', () => {
    expect(newGrantModule).toBeTruthy();
  });
});
