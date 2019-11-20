import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksListComponent} from './books-list/books-list.component'
import { BooksFormComponent } from './books-form/books-form.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
  },
  {
    path: 'add',
    component: BooksFormComponent
  },
  {
    path: ':id/edit',
    component: BooksFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { 
  
}
