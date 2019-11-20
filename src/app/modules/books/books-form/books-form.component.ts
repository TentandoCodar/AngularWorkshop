import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {
  form: FormGroup;
  id: number;
  titleBtn = 'Salvar';
  constructor(private activateRouter: ActivatedRoute, private booksService: BooksService, private router: Router) { 
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null,[Validators.required]),
      image: new FormControl(null, [])
    });
    this.id = this.activateRouter.snapshot.params.id;
    if(this.id) {
      this.titleBtn = 'Editar';
      this.booksService.getById(this.id).then((book:any) => {
        this.form.patchValue(book);
      })
    }
  }

  ngOnInit() {
  }

  save() {
    if(this.id) {
      const book = this.form.getRawValue();
      this.booksService.update(this.id, book).then((resp) => {
        this.router.navigateByUrl('/books')
      }).catch((err) => {

      });
      
    }
    else {
      console.log(this.form.getRawValue())
      this.booksService.save(this.form.getRawValue()).then((resp) => {
        this.router.navigateByUrl('/books')
      }).catch((err) => {
        
      });
    }
    
  }

}
