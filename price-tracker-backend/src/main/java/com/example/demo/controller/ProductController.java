package com.example.demo.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Product;
import com.example.demo.models.User;
import com.example.demo.models.WishList;
import com.example.demo.models.WishListId;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WishListRepository;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "*")
public class ProductController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private WishListRepository wishListRepository;

	public ProductController(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@PostMapping("/product")
	public ResponseEntity<MessageResponse> addProduct(@RequestBody Map<String, String> payload) {

		Product product;

		// Create new Product
		if (!productRepository.existsByStoreId(payload.get("id"))) {
			product = productRepository.save(new Product(payload.get("id"), payload.get("image"), payload.get("name"),
					payload.get("price"), payload.get("link")));
		} else {
			product = productRepository.findByStoreId(payload.get("id")).get();
		}

		User user = userRepository.findById(Long.valueOf(payload.get("user_id"))).get();

		WishListId wishListId = new WishListId(user.getId(), product.getId());
		WishList wishList = new WishList(wishListId, payload.get("threshold"));
		
		if(wishListRepository.existsByIdUserAndIdProduct(user.getId(), product.getId()))
			return ResponseEntity.badRequest().body(new MessageResponse("Error: User already follows this product!"));
		
		wishListRepository.save(wishList);

		return ResponseEntity.ok(new MessageResponse("New product added!"));

	}

}
