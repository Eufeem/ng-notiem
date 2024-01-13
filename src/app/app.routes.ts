import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user'
  }, {
    path: 'user',
    loadComponent: () => import('./pages/user/user-table/user-table.component').then(m => m.UserTableComponent)
  }, {
    path: 'role',
    loadComponent: () => import('./pages/role/role-table/role-table.component').then(m => m.RoleTableComponent)
  }, {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
