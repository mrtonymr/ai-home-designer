import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'design',
    loadComponent: () =>
      import('./pages/design/design').then(m => m.Design)
  },
  {
    path: 'result',
    loadComponent: () =>
      import('./pages/result/result').then(m => m.Result)
  }
];