import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { OnefetchComponent } from './onefetch/onefetch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const Routechild: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ProductListComponent,
    data: {title: 'product list'}
  },
  {
    path: ':id',
    component: DetailsComponent,
    data: {title: 'detail page'}
  },
  {
    path: 'onefetch',
    component: OnefetchComponent,
    data: {title: 'one fetch data'}
  }
];
@NgModule({
  declarations: [
    ProductListComponent,
    HeaderComponent,
    DetailsComponent,
    OnefetchComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(Routechild),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
