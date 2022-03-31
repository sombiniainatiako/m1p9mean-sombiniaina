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
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
