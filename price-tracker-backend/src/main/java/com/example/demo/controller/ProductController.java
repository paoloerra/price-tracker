package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repositories.ProductRepository;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	public ProductController(ProductRepository productRepository) {	
		this.productRepository = productRepository;
	}
	

}
