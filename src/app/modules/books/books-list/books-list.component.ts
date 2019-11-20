import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books = []
  constructor(private booksService: BooksService) { 
    
  }

  ngOnInit() {
    this.booksService.getBooks().then((resp:any) => {
      this.books = resp;
    }).catch((err) => {
      console.log(err);
    });
  }

}
