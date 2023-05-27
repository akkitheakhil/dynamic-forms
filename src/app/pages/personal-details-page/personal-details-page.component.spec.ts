import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PersonalDetailsFormComponent } from './components/personal-details-form/personal-details-form.component';
import { PersonalDetailsPageComponent } from './personal-details-page.component';
import { PersonalDetailsFacadeService } from './services/personal-details-facade.service';

describe('PersonalDetailsPageComponent', () => {
  let component: PersonalDetailsPageComponent;
  let fixture: ComponentFixture<PersonalDetailsPageComponent>;
  let facadeServiceMock: jasmine.SpyObj<PersonalDetailsFacadeService>;

  beforeEach(waitForAsync(() => {
    const facadeServiceSpy = jasmine.createSpyObj(
      'PersonalDetailsFacadeService',
      ['personalDetailsForm']
    );

    TestBed.configureTestingModule({
      imports: [PersonalDetailsPageComponent, PersonalDetailsFormComponent],
      providers: [
        { provide: PersonalDetailsFacadeService, useValue: facadeServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsPageComponent);
    component = fixture.componentInstance;
    facadeServiceMock = TestBed.inject(
      PersonalDetailsFacadeService
    ) as jasmine.SpyObj<PersonalDetailsFacadeService>;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
