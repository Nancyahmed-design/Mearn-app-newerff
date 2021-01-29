
import {NgModule} from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import {ProductDetailsComponent} from "./features/product/product-details/product-details.component"
import { AddProductComponent } from "./features/product/add-product/add-product.component";
import { ProductListingComponent } from "./features/product/product-listing/product-listing.component";
const routes:Routes=[
    {path:'',component: ProductListingComponent},
    {path:'home',redirectTo:'',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'product/listing',component:ProductListingComponent},
    {path:'product/add',component:AddProductComponent},
    {path:'product/details/:id',component:ProductDetailsComponent},
    {path:'product/edit/:id',component:AddProductComponent}
    // {path:'**',}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class CustomAppRoutingModule{}