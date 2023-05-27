import { Injectable, inject } from '@angular/core';
import {
  DynamicForm,
  FormType,
  FormTypeConst,
} from '@shared/models/common.model';
import { Observable, map } from 'rxjs';
import { PersonalDetailsHttpService } from './personal-details-http.service';

@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsFacadeService {
  private readonly httpService = inject(PersonalDetailsHttpService);

  personalDetailsForm(): Observable<DynamicForm[]> {
    return this.httpService.importPersonalDetailsForm().pipe(
      // QUESTION: Do we need to display hidden form value in result? If then need to tweak the code a bit to add this functionality,
      // Current doesn't return hidden fields.
      map((forms) => forms.filter((form) => form.hidden === 'false')),
      map((forms) =>
        forms.map((form) => ({
          ...form,
          // Not a big fan of checking field itself to understand if its email. Better to have type='email' ?.
          type: this.mapTypesToFormTypes(
            form.field === 'email' ? form.field : form.type
          ),
        }))
      )
    );
  }

  mapTypesToFormTypes(type: string): FormType {
    return type === 'email'
      ? FormTypeConst.EMAIL
      : type === 'check'
      ? FormTypeConst.CHECK_BOX
      : FormTypeConst.TEXT;
  }
}
