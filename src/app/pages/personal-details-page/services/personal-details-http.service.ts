import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DynamicForm } from '@shared/models/common.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../constants/http-route.constants';

@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsHttpService {
  private readonly httpClient = inject(HttpClient);
  private apiEndpoints = API_ENDPOINTS;

  // I like getting these dynamic data from endpoint. Unless its really static and has dependency only on the FE. In such case might be better to use just a readonly const?
  // `importPersonalDetailsForm`, which uses, httpClient to fetch data from assets. (I see use-cases for this, eg: replace data in assets folder without rebuilding/compiling the code);
  // Another option, which doesn't make a whole lot sense, is to simply import it directly from the assets folder. using Import statement eg: `import json from '/assets/data/personal-details-form.json';`
  importPersonalDetailsForm(): Observable<DynamicForm[]> {
    const url = this.apiEndpoints.IMPORT_PERSONAL_DETAIL_FORM;
    return this.httpClient.get<DynamicForm[]>(url);
  }
}
