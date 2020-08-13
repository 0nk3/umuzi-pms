import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'computer';
  products: IProduct[] = [];
  errorMessage: string;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  // life cycle hook
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => (this.errorMessage = err),
    });
    console.log('On Init . . .');
  }
}
