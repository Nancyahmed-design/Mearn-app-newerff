import { Component,OnChanges,EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  
})
export class ProductItemComponent implements OnInit,OnChanges {
  @Input() product:Product;
  // @Output() itemAddedd =new EventEmitter<Product>();
  example:string;
  person:{name,age}
  constructor(private productService :  ProductService) {
    
   }

  ngOnInit(): void {}
  ngOnChanges(): void{
//     if(this.product.price <10000) { 
//       //this is a backend call
//       this.product ={
//       name:'wow deal',
//       price:300,
//      // discount:50,
//      imgUrl:'../../../../assets/img/placeholder.png'
//    };
//  }
  }
  getPrice(): number {
    return this.product.discount 
    ? this.product.price - this.product.discount 
    :this.product.price;
  }
  addedToCart():void{
    // this.itemAddedd.emit(this.product);
   this.productService.productAddedd.emit(this.product);
  }

}
