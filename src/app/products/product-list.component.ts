import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  products: any[] = [
    {
      productId: 2,
      productName: 'Computer Keyboard',
      productCode: 'KYB-00123',
      releaseDate: '11 August 2019',
      description: 'Old School Machanical Keyboard',
      price: 200,
      starRating: 3,
      imageURL: 'assets/images/keyboard.jpeg',
    },
    {
      productId: 3,
      productName: 'Computer Mouse',
      productCode: 'CMS-003',
      releaseDate: '20 August 2001',
      description: 'Standard Computer Mouse',
      price: 120,
      starRating: 3.5,
      imageURL: 'assets/images/mouse.jpg',
    },
    {
      productId: 5,
      productName: 'Dell Computer Tower',
      productCode: 'CTW-005',
      releaseDate: '21 August 1995',
      description: 'Standard Dell Mini Tower',
      price: 1800,
      starRating: 4,
      imageURL: 'assets/images/tower.jpg',
    },
    {
      productId: 7,
      productName: 'RJ-45 Cable',
      productCode: 'CBL-007',
      releaseDate: '20 August 2003',
      description: 'Standard RJ-45 Internet Cable',
      price: 33,
      starRating: 5,
      imageURL: 'assets/images/rj45.jpg',
    },
    {
      productId: 11,
      productName: 'Computer Monitor',
      productCode: 'CMN-00123',
      releaseDate: '20 August 2008',
      description: 'Samsung Computer Monitor',
      price: 1350,
      starRating: 4.5,
      imageURL: 'assets/images/screen.jpg',
    },
    {
      productId: 13,
      productName: 'Table',
      productCode: 'TBL-00123',
      releaseDate: '20 August 2001',
      description: 'Standard Table',
      price: 600,
      starRating: 1.5,
      imageURL: 'assets/images/table.jpg',
    }
  ];
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}
