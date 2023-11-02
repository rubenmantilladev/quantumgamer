import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/products/services/product.service';
import { ProductCard } from 'src/app/core/products/models/product-card.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart-page/services/cart.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: ProductCard;
  id!: number;

  constructor(
    private productSvc: ProductService,
    private _router: ActivatedRoute,
    private _cartSvc: CartService,
    private _notifySvc: NotifyService
  ) {
    this.id = this._router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productSvc.getProducts().subscribe((products) => {
      // filtrando los datos del producto segun el id
      this.product = products.filter((product) => product.id == this.id)[0];
    });
  }

  addTodCart(id: number | undefined) {
    const product = { id, quantity: 1 };
    this._cartSvc.addProductInCart(product);
    this._notifySvc.showSuccess('Se ha añadido al carrito', 'Ok');
  }
}
