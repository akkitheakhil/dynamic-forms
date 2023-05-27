import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'details',
    loadComponent: () =>
      import(
        './pages/personal-details-page/personal-details-page.component'
      ).then((component) => component.PersonalDetailsPageComponent),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./not-found.component').then((mod) => mod.NotFoundComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'details',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
