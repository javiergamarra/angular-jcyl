import { CentersModule } from './centers.module';

describe('CentersModule', () => {
  let centerModule: CentersModule;

  beforeEach(() => {
    centerModule = new CentersModule();
  });

  it('should create an instance', () => {
    expect(centerModule).toBeTruthy();
  });
});
