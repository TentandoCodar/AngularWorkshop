import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksItemComponent } from './books-item/books-item.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksFormComponent } from './books-form/books-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksItemComponent, BooksListComponent, BooksFormComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
