import { NewGrantModule } from './new-grant.module';

describe('NewGrantModule', () => {
  let newGrantModule: NewGrantModule;

  beforeEach(() => {
    newGrantModule = new NewGrantModule();
  });

  it('should create an instance', () => {
    expect(newGrantModule).toBeTruthy();
  });
});
