package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String image_url;
	private String name;
	private String price;
	private String link;
		
	//CONSTRUCTOR METHODS
	public Product() {
	}
	
	public Product(String image_url, String name, String price, String link) {
		this.image_url = image_url;
		this.name = name;
		this.price = price;
		this.link = link;
	}

	//GET & SET METHODS
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
		
}
