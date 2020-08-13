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
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  // life cycle hook
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log('On Init . . .');
  }
}
