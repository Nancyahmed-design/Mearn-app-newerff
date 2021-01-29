import { Component,EventEmitter, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products:Product[];
  // @Output() productAddedd = new EventEmitter<Product>();
  pageNumbers: number[]=[];
  pageSize =9;
  currentPage =0;
  constructor(private productService:ProductService) {
   }
  
  ngOnInit(): void {
    // this.products=this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      (response)=>{
        this.products = response['product'];
      this.calculateNumberOfPages(response['numberOfProducts']);
    
    },
      (err)=>{console.log(err)},
      ()=>{}
    );
    
    
    // ClassTest.cartArray
  }
  // subscribeFunction(object: Product):void{
  //   // alert('listed')
  //   // console.log(object.name);
  //   // this.productAddedd.emit(object);
  //      this.productService.productAddedd.emit(object);
  // }
  calculateNumberOfPages(length){
    this.pageNumbers=[];
    for(let index=0 ; index<length/this.pageSize ;index++){
      this.pageNumbers.push(index+1);
    }
  }
  
  getSlicedArrayofProducts():Product[]{
    const start =  this.currentPage*this.pageSize;
    return this.products.slice(
      start,
      start+this.pageSize
      );
  }

  onSearchHandler(searchInput){
//     this.products = this.productService.searchByName(searchInput.value);
//     this.calculateNumberOfPages();
// console.log(searchInput.value);

  }
}
