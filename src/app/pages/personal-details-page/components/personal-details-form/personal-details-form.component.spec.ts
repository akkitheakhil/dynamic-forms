import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalDetailsFormComponent } from './personal-details-form.component';

describe('PersonalDetailsFormComponent', () => {
  let component: PersonalDetailsFormComponent;
  let fixture: ComponentFixture<PersonalDetailsFormComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PersonalDetailsFormComponent, ReactiveFormsModule],
    }).overrideComponent(PersonalDetailsFormComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    });
    fixture = TestBed.createComponent(PersonalDetailsFormComponent);
    component = fixture.componentInstance;
    component.dynamicForm = [
      {
        field: 'name',
        label: 'Name',
        type: 'text',
        hidden: 'false',
        mandatory: true,
      },
      {
        field: 'email',
        label: 'Email',
        type: 'email',
        hidden: 'false',
        mandatory: false,
      },
    ];
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  }));

  it('should create the dynamic form group with form controls', () => {
    fixture.detectChanges();
    expect(component['dynamicFormGroup']).toBeDefined();
    expect(component['dynamicFormGroup'].controls['name']).toBeDefined();
    expect(component['dynamicFormGroup'].controls['email']).toBeDefined();
  });

  it('should create validators correctly based on form properties', () => {
    const nameValidators = component['createValidators'](
      component.dynamicForm[0]
    );
    const emailValidators = component['createValidators'](
      component.dynamicForm[1]
    );

    expect(nameValidators).toEqual([Validators.required]);
    expect(emailValidators).toEqual([Validators.email]);
  });

  it('should handle form submission correctly', () => {
    spyOn(console, 'log');
    component['dynamicFormGroup'].setValue({
      name: 'amsterdam',
      email: 'amsterdam@amsterdam.com',
    });

    fixture.detectChanges();
    component['handleSubmit']();
    expect(console.log).toHaveBeenCalledWith('RESULT:', {
      name: 'amsterdam',
      email: 'amsterdam@amsterdam.com',
    });

    expect(component['dynamicFormGroup'].value).toEqual({
      name: null,
      email: null,
    });
  });

  // WANTED TO ADD MORE UNIT TEST. RAN OUT OF TIME :/
});
