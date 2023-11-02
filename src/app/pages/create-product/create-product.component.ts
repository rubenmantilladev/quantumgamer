import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/products/services/product.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  img =
    'https://im.ziffdavisinternational.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg';

  allProductsLength = 20;

  addProductForm: FormGroup = new FormGroup({
    img: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
  });

  constructor(
    private _productSvc: ProductService,
    private _notifySvc: NotifyService,
    private _router: Router
  ) {
    this.getProducts();
  }

  getProducts() {
    this._productSvc.getProducts().subscribe({
      next: (res) => {
        this.allProductsLength = res.length;
        console.log(this.allProductsLength);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onCreateProdct() {
    if (this.addProductForm.invalid) {
      this._notifySvc.showError('Error', 'Por favor, rellene todos los campos');
      return;
    }

    const product = {
      id: this.allProductsLength + 1,
      img: this.addProductForm.value.img,
      name: this.addProductForm.value.name,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
    };
    this._productSvc.setProducts(product);
    this._router.navigate(['/']);
  }
}
