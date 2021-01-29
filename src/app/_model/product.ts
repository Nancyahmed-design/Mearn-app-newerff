import {PaymentType} from'./payment-type';
import { ProductCategory } from './product-category';
import {ProductLang} from'./product-lang';
import {Tag} from './tag';
export interface Product{
    id?:number;
    data: ProductLang[];
    price?:number;
    discount?:number;
    imagesUrls?:string[];
    paymentTypes?: PaymentType[];
    category?: ProductCategory;
    tags?: Tag[];
}