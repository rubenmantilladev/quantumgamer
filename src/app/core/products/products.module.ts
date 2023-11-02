import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductCardComponent, ProductListComponent],
})
export class ProductsModule {}
