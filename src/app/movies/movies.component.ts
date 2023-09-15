import { Component, OnInit } from '@angular/core';
import { ProductServService } from '../product-serv.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private proServ:ProductServService){}
  products:any[]=[];
  allproducts:any[]=[];
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  lang:string='en-US';
  totalPages!:number ;
  itemsPerPage: number=20;
  currentpage: number=1;

ngOnInit():void{
  this.proServ.allmovies(this.currentpage ,this.lang).subscribe({next:(response)=>{
   this.products=response.results;  
    this.allproducts=[this.products];
    this.totalPages = response.total_results;
  }
});
}

showDetails(itemid : number){

for(let item of this.products){
    if (item.id == itemid){
        item.showElecDetails = !item.showElecDetails;
    }

}
}

printid(itemid:number){
    console.log(itemid);
}

private searchval:String='';

set searchValue(value: string) {
  this.searchval = value;
  this.searchallProducts(value);
}

searchallProducts(producttitle: string) {
  this.proServ.searchallMovies(producttitle).subscribe({next:(response)=>{
    this.products=response.results;  
     this.allproducts=this.products;
     console.log(this.products);
   }
 });
}


changeLanguage(){
  this.lang=this.lang=='en-US'?'ar-SA':'en-US';
  this.proServ.allmovies(this.currentpage,this.lang).subscribe({next:(response)=>{
    this.products=response.results;  
     this.allproducts=this.products;
   }
 });


  
}

changePage(data:PageEvent){
  this.currentpage=data.pageIndex+1;
  this.proServ.allmovies(this.currentpage,this.lang).subscribe({next:(response)=>{
  this.products=response.results;  
  this.allproducts=this.products;
 }
});
}


}
