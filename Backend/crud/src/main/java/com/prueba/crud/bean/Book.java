package com.prueba.crud.bean;

public class Book {
	private int Id;
	private String autor;
	public String getAutor() {
		return autor;
	}
	public void setAutor(String autor) {
		this.autor = autor;
	}
	private String nombre;
	private String descripcion;
	private String fechaPublicacion;
	private int numeroEjemplares;
	private float costo;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getFechaPublicacion() {
		return fechaPublicacion;
	}
	public void setFechaPublicacion(String fechaPublicacion) {
		this.fechaPublicacion = fechaPublicacion;
	}
	public int getNumeroEjemplares() {
		return numeroEjemplares;
	}
	public void setNumeroEjemplares(int numeroEjemplares) {
		this.numeroEjemplares = numeroEjemplares;
	}
	public float getCosto() {
		return costo;
	}
	public void setCosto(float costo) {
		this.costo = costo;
	}

}
