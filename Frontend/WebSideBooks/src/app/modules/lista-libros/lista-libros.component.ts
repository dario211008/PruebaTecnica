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
    const params = {

    };
    const serviceExecute = this.bookService.getBookList(params);
    serviceExecute.subscribe(
      (response) => {
        this.libros = JSON.parse(JSON.stringify(response.data));
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

  addBook(){
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
    dialogConfig.data = { message: 'Editar libro', };
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
      .subscribe(response => {
        if (response !== null || response === true) {
        } else {

        }
      });
  }
}
