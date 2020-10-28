import { Libro } from './../../objects/libro';
import { BookService } from './../../services/book.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  BookForm: FormGroup;
  book: Libro;
  fecha: Date;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditBookComponent>,
    private formBuilder: FormBuilder,
    private bookService: BookService) {
    this.book = new Libro();
    this.book = data.data;
    this.fecha = new Date(this.book.fechaPublicacion);
  }

  ngOnInit() {
    this.initializeFormControls();
  }

  initializeFormControls() {
    this.BookForm = this.formBuilder.group({
      nombre: [
        this.book.nombre,
        [Validators.required]
      ],
      descripcion: [
        this.book.descripcion,
        [Validators.required]
      ],
      fechaPublicacion: [
        this.fecha,
        [Validators.required]
      ],
      autor: [
        this.book.autor,
        [Validators.required]
      ],
      numeroEjemplares: [
        this.book.numeroEjemplares,
        [Validators.required]
      ],
      costo: [
        this.book.costo,
        [Validators.required]
      ],
    });
  }

  accept() {
    const serviceExecute = this.bookService.updateBook(this.BookForm.value);
    serviceExecute.subscribe(
      (response) => {
        const result = JSON.parse(JSON.stringify(response));
        this.dialogRef.close(true);
      },
      (error) => {
        this.dialogRef.close(null);
      }
    );
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
