import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../pages/search-results/search-results.module').then(
            (m) => m.SearchResultsModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('../pages/product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('../pages/create-product/create-product.module').then(
            (m) => m.CreateProductModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../pages/cart-page/cart-page.module').then(
            (m) => m.CartPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'add-product',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
