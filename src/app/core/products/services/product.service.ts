import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProductCard } from '../models/product-card.interface';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = `${environment.apiBaseUrl}/v1`;
  /* 'https://via.placeholder.com/150' */

  // START: Products array test
  // -----------------------------------------------------------------
  private productsList: ProductCard[] = [
    {
      id: 1,
      img: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/XVRM4ZSAIRIFVOQ5U5EFOYJ6ZQ.jpg',
      name: 'Juego A',
      description:
        'Este es un emocionante juego de aventuras con gráficos impresionantes.',
      price: 49.99,
    },
    {
      id: 2,
      img: 'https://www.esportmaniacos.com/wp-content/uploads/2021/10/halo-min.jpg',
      name: 'Juego B',
      description:
        'Un juego de estrategia en tiempo real que desafiará tu mente.',
      price: 29.99,
    },
    {
      id: 3,
      img: 'https://img.unocero.com/2015/07/The-Last-of-Us-Box-Art.jpg',
      name: 'Juego C',
      description:
        'Un juego de disparos en primera persona lleno de acción y adrenalina.',
      price: 39.99,
    },
    {
      id: 4,
      img: 'https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/35.jpg',
      name: 'Juego D',
      description:
        'Un juego de rol épico con un mundo abierto lleno de secretos por descubrir.',
      price: 54.99,
    },
    {
      id: 5,
      img: 'https://areajugones.sport.es/wp-content/uploads/2020/09/immortals-fenyx-rising-3.jpg',
      name: 'Juego E',
      description: 'Un juego de rompecabezas desafiante con hermosos paisajes.',
      price: 19.99,
    },
    {
      id: 6,
      img: 'https://as01.epimg.net/meristation/imagenes/2018/11/15/noticias/1542271076_761932_1542271193_sumario_normal.jpg',
      name: 'Juego F',
      description:
        'Un juego de carreras de alta velocidad con gráficos realistas.',
      price: 44.99,
    },
    {
      id: 7,
      img: 'https://www.neoteo.com/wp-content/uploads/2009/04/far-cry.jpg',
      name: 'Juego G',
      description:
        'Una aventura de ciencia ficción que te llevará a mundos alienígenas.',
      price: 49.99,
    },
    {
      id: 8,
      img: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/YMEGNGX3QVNJZC4YMYXEDCDW7I.jpg',
      name: 'Juego H',
      description:
        'Un juego de simulación de vida en la granja con personajes adorables.',
      price: 34.99,
    },
    {
      id: 9,
      img: 'https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg',
      name: 'Juego I',
      description: 'Un juego de terror psicológico que te mantendrá en vilo.',
      price: 39.99,
    },
    {
      id: 10,
      img: 'https://uvejuegos.com/img/caratulas/17550/Sonic_The_Hedgehog_eeuu_.jpg',
      name: 'Juego J',
      description:
        'Un juego de lucha con personajes icónicos y movimientos especiales.',
      price: 49.99,
    },
    {
      id: 11,
      img: 'https://www.ultimagame.es/sonic-rivals-2/imagen-i2822-pge.jpg',
      name: 'Juego K',
      description:
        'Un juego de estrategia por turnos con gráficos estilo retro.',
      price: 24.99,
    },
    {
      id: 12,
      img: 'https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/34.jpg',
      name: 'Juego L',
      description:
        'Un juego de aventuras submarinas con exploración de tesoros.',
      price: 37.99,
    },
    {
      id: 13,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwbJXAUAir6DfrKau6Ir7EHNG3xAyV3LE2A&usqp=CAU',
      name: 'Juego M',
      description: 'Un juego de plataformas en 2D con personajes carismáticos.',
      price: 19.99,
    },
    {
      id: 14,
      img: 'https://im.ziffdavisinternational.com/ign_es/screenshot/default/epicmickeywii_z5nh.jpg',
      name: 'Juego N',
      description: 'Un juego de supervivencia en un mundo postapocalíptico.',
      price: 29.99,
    },
    {
      id: 15,
      img: 'https://i11d.3djuegos.com/juegos/7620/wwe_12/fotos/ficha/wwe_12-1856807.jpg',
      name: 'Juego O',
      description: 'Un juego de deportes con modos multijugador emocionantes.',
      price: 44.99,
    },
    {
      id: 16,
      img: 'https://media.comunidadxbox.com/wp-content/uploads/2020/04/Portada_Halo_2-715x1024.png',
      name: 'Juego P',
      description:
        'Un juego de estrategia en tiempo real con elementos de construcción.',
      price: 34.99,
    },
    {
      id: 17,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0nSIJybrVMzqShZyQaj4jdDWLf9BJtxzeA&usqp=CAU',
      name: 'Juego Q',
      description:
        'Un juego de aventuras de detectives con misterios intrigantes.',
      price: 39.99,
    },
    {
      id: 18,
      img: 'https://bonusstagemagazine.files.wordpress.com/2020/11/curiosidades-tortugas-ninja-nes-cinta-roja.jpg',
      name: 'Juego R',
      description:
        'Un juego de carreras de motocross con acrobacias emocionantes.',
      price: 24.99,
    },
    {
      id: 19,
      img: 'https://www.neoteo.com/wp-content/uploads/2009/04/16093-super-mario-bros-3-nes-front-cover.jpg',
      name: 'Juego S',
      description: 'Un juego de rol con un sistema de combate por turnos.',
      price: 49.99,
    },
    {
      id: 20,
      img: 'https://www.neoteo.com/wp-content/uploads/2009/04/donkey-kong-arcade.jpg',
      name: 'Juego T',
      description:
        'Un juego de estrategia espacial con batallas épicas en el espacio.',
      price: 54.99,
    },
  ];
  private productsSubject = new BehaviorSubject<ProductCard[]>([]);
  getProducts(): Observable<ProductCard[]> {
    return this.productsSubject.asObservable();
  }
  setProducts(product: ProductCard) {
    this.productsList.push(product);
    this.productsSubject.next([...this.productsList]);
    localStorage.setItem('products', JSON.stringify(this.productsList));
  }
  // -----------------------------------------------------------------
  // FINAL: Products array test

  constructor(private http: HttpClient) {
    this.productsSubject.next([...this.productsList]);
    const products = localStorage.getItem('products');
    if (products) {
      this.productsList = JSON.parse(products);
      this.productsSubject.next([...this.productsList]);
    }
  }

  getAllProducts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.get(`${this.baseUrl}/products`, { headers });
  }

  createProduct(product: Product) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.post(`${this.baseUrl}/products`, product, { headers });
  }
}
