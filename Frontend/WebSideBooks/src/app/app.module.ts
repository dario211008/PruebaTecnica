import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBookComponent } from './modules/add-book/add-book.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { DeleteBookComponent } from './modules/delete-book/delete-book.component';
import { EditBookComponent } from './modules/edit-book/edit-book.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaLibrosComponent } from './modules/lista-libros/lista-libros.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    EditBookComponent,
    AddBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    EditBookComponent,
    AddBookComponent,
    DeleteBookComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
