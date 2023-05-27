import { FormControl } from '@angular/forms';

export const FormTypeConst = {
  EMAIL: 'email',
  TEXT: 'text',
  CHECK_BOX: 'checkbox',
} as const;

export type FormType = (typeof FormTypeConst)[keyof typeof FormTypeConst];

export type DynamicForm = {
  field: string;
  label: string;
  type: FormType;
  hidden: string;
  mandatory?: boolean;
};

export type DynamicFormGroup = {
  [key: string]: FormControl<string | boolean | null>;
};
