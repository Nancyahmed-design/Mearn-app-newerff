import {ProductCategory} from '../_model/product-category';
/////////////////////////////////////////
export class ProductCategoryService{
    productCategory:ProductCategory[]=[
        {id:'5eac38b30cfca15d7c804090',name:'Arts & Crafts'},
        // {id:2,name:'Automotive'},
        // {id:3,name:'Baby'},
        // {id:4,name:'Books'},
        // {id:5,name:'Eletronics'},
        // {id:6,name:'Womens Fashion'},
        // {id:7,name:'Mens Fashion'},
        // {id:8,name:'Health & Household'},
        // {id:9,name:'Home & Kitchen'},
        // {id:10,name:'Military Accessories'},
        // {id:11,name:'Movies & Television'},
        // {id:12,name:'Sports & Outdoors'},
        // {id:13,name:'Tools & Home Improvement'},

    ];
    getAllProductCategory():ProductCategory[]{
        return this.productCategory.slice();
    }
}
