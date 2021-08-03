import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridProductComponent } from './components/grid-product/grid-product.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataUserComponent } from './components/data-user/data-user.component';
import { SliderComponent } from './components/slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    GridProductComponent,
    FormUserComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DataUserComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
