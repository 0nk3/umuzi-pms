import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Details';
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // lets retrive the product, but we will hard code since the
    // focus is routing rather http
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Computer Keyboard',
      productCode: 'KYB - 00123',
      releaseDate: '11 August 2019',
      description: 'Old School Machanical Keyboard',
      price: 200,
      starRating: 3.5,
      imageURL: 'assets/images/keyboard.jpeg',
    };
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
