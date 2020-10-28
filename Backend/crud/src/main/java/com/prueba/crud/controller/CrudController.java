package com.prueba.crud.controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.crud.bean.Book;
import com.prueba.crud.logic.BusinessLogic;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/crud")
public class CrudController {
	
	@RequestMapping(value="/getBook", method=RequestMethod.GET)
	public List<Book> getBook(HttpServletRequest request) {
		BusinessLogic bl =  new BusinessLogic();
		return bl.getBooks();
	}
	
	@RequestMapping(value="/addBook", method=RequestMethod.POST)
	public Boolean addBook(HttpServletRequest request) {
		BusinessLogic bl =  new BusinessLogic();
		Book book =  new Book();
		return bl.addBook(book);
	}
	
	@RequestMapping(value="/updateBook", method=RequestMethod.POST)
	public Boolean updateBook(HttpServletRequest request) {
		BusinessLogic bl =  new BusinessLogic();
		Book book =  new Book();
		return bl.addBook(book);
	}
	
	@RequestMapping(value="/deleteBook", method=RequestMethod.POST)
	public Boolean deleteBook(HttpServletRequest request) {
		BusinessLogic bl =  new BusinessLogic();
		Book book =  new Book();
		return bl.addBook(book);
	}

}
