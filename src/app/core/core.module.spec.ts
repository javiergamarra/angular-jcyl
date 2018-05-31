import {CoreModule} from './core.module';

describe('CoreModule', () => {
  let coreModule: CoreModule;

  beforeEach(() => {
    coreModule = new CoreModule();
  });

  it('should createGrant an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
