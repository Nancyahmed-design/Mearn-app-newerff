import { Component, DoCheck, OnInit  } from '@angular/core';
import { Product } from 'src/app/_model/product';
import {ProductService} from './_services/product.services'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  productsArray: Product[]=[];
  currentPage:string = 'this.productService.currentPage';
  constructor(private productService : ProductService) { }

  // title = 'Mearn-app-new';
  ngDoCheck(){
    this.currentPage= this.productService.currentPage;

  }
  addToCartAtHeader(product: Product){
    console.log(product);
    this.productsArray.push(product);
  }
}
