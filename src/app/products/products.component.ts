import { Component } from '@angular/core';
import { ProductServService } from '../product-serv.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private proServ:ProductServService){}

  products:any[]=this.proServ.allProducts();

allproducts: any[]=this.products;


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
  if(producttitle==''){
    this.products=this.allproducts;
  }
  else{
  this.products= this.products.filter(function(item){
    if(item.title.toLocaleLowerCase().includes(producttitle.toLocaleLowerCase())){
      return item;
    }
    }
    )
  }
  }
   
  
}

