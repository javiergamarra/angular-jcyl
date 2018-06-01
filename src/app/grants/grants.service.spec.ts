import {GrantsService} from './grants.service';
import {HttpErrorResponse} from '@angular/common/http';
import {defer} from 'rxjs';

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('GrantsService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let grantsService: GrantsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    grantsService = new GrantsService(<any> httpClientSpy);
  });

  it('should return expected grants (HttpClient called once)', () => {

    httpClientSpy.get.and.returnValue(asyncData(['hola']));

    grantsService.getGrants().subscribe(
      grants => expect(grants).toEqual(['hola'], 'expected grants'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 Not Found',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    grantsService.getGrants().subscribe(
      grants => fail('expected an error, not grants'),
      error => expect(error.message).toContain('404 Not Found')
    );
  });
});
