import { BookService } from './../../services/book.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  BookForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddBookComponent>,
    private bookService: BookService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeFormControls();
  }

  initializeFormControls() {
    this.BookForm = this.formBuilder.group({
      nombre: [
        null,
        [Validators.required]
      ],
      descripcion: [
        null,
        [Validators.required]
      ],
      fechaPublicacion: [
        null,
        [Validators.required]
      ],
      autor: [
        null,
        [Validators.required]
      ],
      numeroEjemplares: [
        null,
        [Validators.required]
      ],
      costo: [
        null,
        [Validators.required]
      ],
    });
  }


  accept() {
    const serviceExecute = this.bookService.addBook(this.BookForm.value);
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
