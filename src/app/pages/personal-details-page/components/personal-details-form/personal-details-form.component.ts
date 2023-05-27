import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';
import {
  ErrorLabels,
  InputComponent,
} from '@shared/components/input/input.component';
import {
  DynamicForm,
  DynamicFormGroup,
  FormTypeConst,
} from '@shared/models/common.model';

@Component({
  selector: 'app-personal-details-form',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDetailsFormComponent implements OnInit {
  private fb = inject(FormBuilder);

  protected dynamicFormGroup = this.fb.group<DynamicFormGroup>({});
  protected formTypes = FormTypeConst;
  protected errorLabels: ErrorLabels = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
  };

  @Input({ required: true }) dynamicForm: DynamicForm[] = [];

  ngOnInit(): void {
    this.dynamicForm.forEach((form) => {
      const validators = this.createValidators(form);
      this.dynamicFormGroup.addControl(
        form.field,
        this.fb.control('', [...validators])
      );
    });
  }

  private createValidators(form: DynamicForm): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    if (form.mandatory) {
      validators = [...validators, Validators.required];
    }

    if (form.type === 'email') {
      validators = [...validators, Validators.email];
    }

    return validators;
  }

  protected handleSubmit() {
    if (this.dynamicFormGroup.invalid) return;
    console.log('RESULT:', this.dynamicFormGroup.value);
    this.dynamicFormGroup.reset();
  }
}
