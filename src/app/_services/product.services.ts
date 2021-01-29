// import * as EventEmitter from 'events';
import { EventEmitter, Inject, Injectable } from '@angular/core';

import {Product} from '../_model/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class ProductService {
   private products:Product[];
  //  
  //           {
  //             id:1,
  //             data: [{name:'photo camera',description:'hamaaaaadaaaaa'}]  , 
  //             price:300,
  //             discount:50,
  //             category:{id:1 , name:'Arts & Crafts'},
  //             imagesUrls:['../../../../assets/img/placeholder.png']
  //         },
  //         {
  //             id:2,
  //           data: [{name:'camera',description:'hamaaaaadaaaaa'}]  , 
  //         price:3000,
  //         // discount:50,
  //         category:{id:2},

  //         imagesUrls:['../../../../assets/img/placeholder.png']
  //       },
  //       {
  //           id:3,
  //           data: [{name:'phone ',description:'hamaaaaadaaaaa'}]  , 
  //           price:500,
  //       // discount:50,
  //       category:{id:3},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //     },
  //     {
  //         id:4,
  //       data: [{name:'sumsung Note 8',description:'hamaaaaadaaaaa'}]  , 

  //       price:5000,
  //       discount:100,
  //       category:{id:4},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //     },
  //     {
  //         id:5,
  //         data: [{name:'laptop',description:'hamaaaaadaaaaa'}]  , 
  //         price:30000,
  //       discount:5000,
  //       category:{id:5 , name:'Electronics'},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //     },
  //     {
  //         id:6,
  //         data: [{name:'lenove laptop',description:'hamaaaaadaaaaa'}]  , 
  //         price:35000,
  //       discount:1000,
  //       category:{id:6},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //     },
  //     {
  //         id:7,
  //         data: [{name:'dell laptop',description:'hamaaaaadaaaaa'}]  , 
  //         price:35000,
  //       discount:1000,
  //       category:{id:7},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //     },
  //     {
  //         id:8,
  //         data: [{name:'hp laptop',description:'hamaaaaadaaaaa'}]  , 
  //         price:35000,
  //       discount:1000,
  //       category:{id:8},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //     },
  //     {
  //         id:9,
  //         data: [{name:'camera',description:'hamaaaaadaaaaa'}]  , 
  //         price:35000,
  //       discount:1000,
  //       category:{id:9},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //           },
  //     {
  //         id:10,
  //         data: [{name:'newItam1',description:'hamaaaaadaaaaa'}]  , 

  //       price:35000,
  //       discount:1000,
  //       category:{id:10},

  //       imagesUrls:['../../../../assets/img/placeholder.png']  
  //         },
  //     {
  //         id:11,
  //         data: [{name:'newItam2',description:'hamaaaaadaaaaa'}]  , 
  //       price:35000,
  //       discount:1000,
  //       category:{id:11},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //          },
  //     {
  //         id:12,
  //         data: [{name:'newItam3',description:'hamaaaaadaaaaa'}]  , 
  //       price:35000,
  //       discount:1000,
  //       category:{id:12},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //           },
  //     {
  //         id:13,
  //         data: [{name:'newItam4',description:'hamaaaaadaaaaa'}]  , 
  //       price:35000,
  //       discount:1000,
  //       category:{id:13},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //         },
  //     {
  //         id:14,
  //         data: [{name:'newItam5',description:'hamaaaaadaaaaa'}]  , 
  //       price:35000,
  //       discount:1000,
  //       category:{id:14},

  //       imagesUrls:['../../../../assets/img/placeholder.png']
  //        }
      
          
  //   ];
     productAddedd = new EventEmitter<Product>();
    currentPage = 'listing';
     baseUrl ='https://mearn-stack-backend-test.herokuapp.com/';

    constructor(private httpClient:HttpClient){}


    getAllProducts(){
      return this.httpClient.get(`${this.baseUrl}product`);
        // return this.products.slice();
    }
    getProductById(id:number): Product{
        return this.products.find(p =>p.id === id);
        
    }
    addProduct(product:Product){
      let body={
        discount :product.discount,
        price :product.price,
        imagesUrls :product.imagesUrls,
        data :product.data,
        categoryId :product.category.id,
      };
      const token = localStorage.getItem('token');
      console.log(token);
      
      const headers = new HttpHeaders({
        authorization:token
      })
      console.log(body);
      
      this.httpClient.post(`${this.baseUrl}product/add`,body,{
        headers});
        
        // const id = this.products.length;
        // const newProduct:Product ={id
        //   ,data:product.data,
        //   price:product.price,
        //   discount:product.discount,
        // category:product.category,
        // imagesUrls:product.imagesUrls,
        // paymentTypes:product.paymentTypes,
        // tags:product.tags}
        // this.products.push(newProduct);
        // console.log(this.products);
        
    }

    updateProduct(product:Product){
        const index = this.products.findIndex((p) =>p.id === product.id);
        // const newProduct:Product ={
        //   id:product.id,
        //   data:product.data,
        //   price:product.price,
        //   discount:product.discount,
        // category:product.category,
        // imagesUrls:product.imagesUrls,
        // paymentTypes:product.paymentTypes,
        // tags:product.tags}

        this.products[index] ={
          id:product.id,
          data:product.data,
          price:product.price,
          discount:product.discount,
        category:product.category,
        imagesUrls:product.imagesUrls,
        paymentTypes:product.paymentTypes,
        tags:product.tags};
    }

    deleteProduct(id:number){
        const index = this.products.findIndex(p =>p.id === id);
        this.products.splice(index,1);
    }

    searchByName(productName:string){
      const prodName = productName.toLowerCase();
      return this.products.filter(p=>p.data[0].name.toLowerCase().includes(prodName));

    }


}