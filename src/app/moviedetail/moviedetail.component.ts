import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServService } from '../product-serv.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  selectedProduct:any;
  
constructor(private route: ActivatedRoute,private proServ:ProductServService){}
products: any[]=[];
imagePath: string = 'https://image.tmdb.org/t/p/w500';


ngOnInit():void{
let id =parseInt(this.route.snapshot.paramMap.get('id')!) || 1234;
console.log("id", id);
this.proServ.selectedMovie(id).subscribe({next:(response)=>{
  this.selectedProduct=response;
  console.log(response);
}});
}

}
