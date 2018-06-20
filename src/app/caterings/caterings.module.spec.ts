import { CateringsModule } from './caterings.module';

describe('CateringsModule', () => {
  let cateringsModule: CateringsModule;

  beforeEach(() => {
    cateringsModule = new CateringsModule();
  });

  it('should create an instance', () => {
    expect(cateringsModule).toBeTruthy();
  });
});
