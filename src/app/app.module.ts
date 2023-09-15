import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { Error404Component } from './error404/error404.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    BooksComponent,
    Error404Component,
    ProductDetialComponent,
    MoviesComponent,
    MoviedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
