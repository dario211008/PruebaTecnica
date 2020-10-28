import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { AddBookComponent } from '../add-book/add-book.component';
import { BookService } from './../../services/book.service';
import { DataTableResponse } from './../../objects/data-table-response';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { Libro } from './../../objects/libro';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnDestroy, OnInit {
  libros: Array<Libro> = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.getBookList();
  }

  getBookList() {
    const serviceExecute = this.bookService.getBookList();
    serviceExecute.subscribe(
      (response) => {
        this.libros = JSON.parse(JSON.stringify(response));
        console.log(this.libros);
        this.dtTrigger.next();
      },
      (error) => {

      }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  addBook() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '800px';
    dialogConfig.minHeight = '50px';
    dialogConfig.data = { message: 'Agregar libro', };
    this.dialog.open(AddBookComponent, dialogConfig).afterClosed()
      .subscribe(response => {
        if (response !== null || response === true) {
        } else {

        }
      });
  }

  editBook(book: Libro) {
    console.log(book);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '800px';
    dialogConfig.minHeight = '50px';
    dialogConfig.data = { message: 'Editar libro', data: book };
    this.dialog.open(EditBookComponent, dialogConfig).afterClosed()
      .subscribe(response => {
        if (response !== null || response === true) {
        } else {

        }
      });
  }

  removeBook(book: Libro) {
    console.log(book);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '800px';
    dialogConfig.minHeight = '50px';
    dialogConfig.data = { message: 'Editar libro', };
    this.dialog.open(DeleteBookComponent, dialogConfig).afterClosed()
      .subscribe(responseDialog => {
        if (responseDialog !== null || responseDialog === true) {
          const indexBook = this.libros.findIndex(b => b.id ===  book.id);
          this.libros.splice(indexBook, 1);
          const serviceExecute = this.bookService.deleteBook(book);
          serviceExecute.subscribe(
            (response) => {
              // this.getBookList();
            },
            (error) => {

            }
          );
        } else {

        }
      });
  }
}
