package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long>{

}
