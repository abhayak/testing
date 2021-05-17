import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './container/index/index.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'login'}
  },
  {
    path: '',
    component: IndexComponent, canActivate: [AuthGuard],
    data: {
      title: 'dist'
    },
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
