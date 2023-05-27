import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DynamicForm } from '@shared/models/common.model';
import { API_ENDPOINTS } from '../constants/http-route.constants';
import { PersonalDetailsHttpService } from './personal-details-http.service';
describe('PersonalDetailsHttpService', () => {
  let service: PersonalDetailsHttpService;
  let httpMock: HttpTestingController;
  let apiEndpoints = API_ENDPOINTS;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonalDetailsHttpService],
    });
    service = TestBed.inject(PersonalDetailsHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch personal details form', () => {
    const dummyForms: DynamicForm[] = [
      {
        field: 'name',
        label: 'Name',
        type: 'text',
        hidden: 'false',
      },
      {
        field: 'email',
        label: 'Email',
        type: 'email',
        hidden: 'false',
      },
    ];

    service.importPersonalDetailsForm().subscribe((forms) => {
      expect(forms.length).toBe(2);
      expect(forms[0].field).toBe('name');
      expect(forms[1].field).toBe('email');
    });
    const url = apiEndpoints.IMPORT_PERSONAL_DETAIL_FORM;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummyForms);
  });
});
