import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
