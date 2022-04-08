import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AccountvalidationComponent } from './accountvalidation/accountvalidation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { MenudishComponent } from './menudish/menudish.component';
import { CartRowComponent } from './cart-row/cart-row.component';
import { CartRestaurantCategoryComponent } from './cart-restaurant-category/cart-restaurant-category.component';
import { CheckoutCategoryComponent } from './checkout-category/checkout-category.component';
import { CheckoutRowComponent } from './checkout-row/checkout-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupFormComponent,
    RestaurantListComponent,
    FooterComponent,
    MenuComponent,
    CartOverviewComponent,
    CheckoutFormComponent,
    OrderListComponent,
    OrderDetailComponent,
    LoginComponent,
    HomeComponent,
    AccountvalidationComponent,
    PaginationComponent,
    MenucategoryComponent,
    MenudishComponent,
    CartRowComponent,
    CartRestaurantCategoryComponent,
    CheckoutCategoryComponent,
    CheckoutRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
