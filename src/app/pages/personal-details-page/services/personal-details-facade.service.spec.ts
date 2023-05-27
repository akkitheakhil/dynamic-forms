import { TestBed } from '@angular/core/testing';

import { DynamicForm, FormTypeConst } from '@shared/models/common.model';
import { of } from 'rxjs';
import { PersonalDetailsFacadeService } from './personal-details-facade.service';
import { PersonalDetailsHttpService } from './personal-details-http.service';

describe('PersonalDetailsFacadeService', () => {
  let service: PersonalDetailsFacadeService;
  let httpServiceMock: jasmine.SpyObj<PersonalDetailsHttpService>;

  beforeEach(() => {
    const httpServiceSpy = jasmine.createSpyObj('PersonalDetailsHttpService', [
      'importPersonalDetailsForm',
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: PersonalDetailsHttpService, useValue: httpServiceSpy },
      ],
    });
    service = TestBed.inject(PersonalDetailsFacadeService);
    httpServiceMock = TestBed.inject(
      PersonalDetailsHttpService
    ) as jasmine.SpyObj<PersonalDetailsHttpService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return filtered and mapped personal details form', (done) => {
    const formsMock: DynamicForm[] = [
      {
        field: 'name',
        label: 'Name',
        type: 'text',
        hidden: 'false',
        mandatory: true,
      },
      {
        field: 'hiddenField',
        label: '',
        type: 'text',
        hidden: 'true',
        mandatory: false,
      },
      {
        field: 'email',
        label: 'Email',
        type: 'text',
        hidden: 'false',
        mandatory: true,
      },
    ];

    httpServiceMock.importPersonalDetailsForm.and.returnValue(of(formsMock));

    service.personalDetailsForm().subscribe((result) => {
      expect(result.length).toBe(2); // HIDDEN REMOVED
      expect(result[0].field).toBe('name');
      expect(result[1].field).toBe('email');
      expect(result[0].type).toBe('text');
      expect(result[1].type).toBe('email'); // MAPPED
      done();
    });
  });

  it('should map types to form types correctly', () => {
    const emailFormType = service.mapTypesToFormTypes('email');
    expect(emailFormType).toBe(FormTypeConst.EMAIL);

    const checkFormType = service.mapTypesToFormTypes('check');
    expect(checkFormType).toBe(FormTypeConst.CHECK_BOX);

    const textFormType = service.mapTypesToFormTypes('text');
    expect(textFormType).toBe(FormTypeConst.TEXT);
  });
});
