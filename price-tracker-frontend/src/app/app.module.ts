import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormUserComponent } from './components/home/form-user/form-user.component';
import { LoginComponent } from './components/home/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { GridProductComponent } from './components/home/grid-product/grid-product.component';
import { SearchbarComponent } from './components/home/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormUserComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    WishListComponent,
    GridProductComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
