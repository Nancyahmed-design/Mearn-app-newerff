import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { Product } from 'src/app/_model/product';
// import { ProductService as productService } from 'src/app/_services/product.services';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  static cartArray;
 cartArray:Product[]=[];
isOpened= false;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
   this.productService.productAddedd.subscribe(
      (res)=>{
        this.cartArray.push(res);
        },
      (err)=>{console.error(err)},
      (completed)=>{alert('hamada.completed')}
    );
    
  }
  ngOnChanges(changes){
    // console.log(this.cartArray);
  }
  changeCurrentPage(dest:string){
    this.productService.currentPage =dest;
  }
  // path='/register';
  calculateTotalAmount() :number{
    let total=0;
    for(let index=0; index<this.cartArray.length;index++){
      const product = this.cartArray[index];
      total += product.discount
      ?product.price-product.discount
      :product.price
    }
    return total;
  }


}
