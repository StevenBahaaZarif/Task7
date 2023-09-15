import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './books/books.component';
import { Error404Component } from './error404/error404.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent  },
  { path: '', component: ProductsComponent },
  { path: 'prodcutdetails/:id', component: ProductDetialComponent },
  { path: 'books', component: BooksComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'moviesdetails/:id', component: MoviedetailComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
