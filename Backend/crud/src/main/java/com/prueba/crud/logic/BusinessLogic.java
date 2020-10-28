package com.prueba.crud.logic;

import java.util.ArrayList;
import java.util.List;

import com.prueba.crud.bean.Book;

public class BusinessLogic {
	
	public List<Book> getBooks(){

		Book vo =  new Book();
		vo.setNombre("Libro 1");
		vo.setDescripcion("Descripcion 1");
		vo.setCosto(10.25f);
		vo.setId(1);
		vo.setFechaPublicacion("10/10/2020");
		vo.setNumeroEjemplares(5);
		vo.setAutor("Autor 1");
		
		
		Book vo2 =  new Book();
		vo2.setNombre("Libro 2");
		vo2.setDescripcion("Descripcion 2");
		vo2.setCosto(10.25f);
		vo2.setId(1);
		vo2.setFechaPublicacion("10/11/2020");
		vo2.setNumeroEjemplares(15);
		vo2.setAutor("Autor 2");
		
		List<Book> books = new ArrayList<Book>();
		books.add(vo);
		books.add(vo2);
		return books;
	}
	
	public Boolean addBook(Book book) {
		return true;		
	}
	
	public Boolean updateBook(Book book) {
		return true;		
	}
	
	public Boolean deleteBook(Book book) {
		return true;		
	}

}
