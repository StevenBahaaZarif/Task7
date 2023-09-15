import { Component } from '@angular/core';
import { ProductServService } from '../product-serv.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
 constructor(private bookServ: ProductServService){}
bookItems: any[]=this.bookServ.allBooks();
  showDetails(itemid : String){

    for(let item of this.bookItems){
        if (item.title == itemid){
            item.showBookDetails = !item.showBookDetails;
    
        }
    
    }
    
    }


}