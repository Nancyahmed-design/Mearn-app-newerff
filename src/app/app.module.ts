import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductService } from './_services/product.services';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomAppRoutingModule } from './app-routing.module';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { StringPipePipe } from './pipes/string-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

// import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductItemComponent,
    ProductListingComponent,
    FooterComponent,
    DropdownComponent,
    AddProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    StringPipePipe,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomAppRoutingModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   {path: 'product-listing',component:ProductListingComponent},
    //   {path: 'login',component:LoginComponent}
    // ])
  ],
  providers: [ProductService,PaymentTypeService,ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
