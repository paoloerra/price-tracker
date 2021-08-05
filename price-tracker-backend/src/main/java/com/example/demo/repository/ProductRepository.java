package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, String>{
	Boolean existsByStoreId(String store_id);
	Optional<Product> findByStoreId(String store_id);
}
