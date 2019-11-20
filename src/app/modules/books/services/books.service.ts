import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { 

  }
  getBooks() {
    return this.http.get('http://localhost:8000/api/books').toPromise();
  }

  save(book:any) {
    return this.http.post('http://localhost:8000/api/books', book).toPromise();
  }

  getById(id) {
    return this.http.get('http://localhost:8000/api/books/' + id).toPromise();
  }

  update(id,book) {
    return this.http.put(`http://localhost:8000/api/books/${id}`,book).toPromise()
  }
}
