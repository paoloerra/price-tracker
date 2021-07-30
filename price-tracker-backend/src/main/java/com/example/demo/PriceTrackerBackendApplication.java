package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.models.Product;
import com.example.demo.models.User;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;

@SpringBootApplication
public class PriceTrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PriceTrackerBackendApplication.class, args);
	}
	
	//DATABASE INITIALIZATION
	@Bean
	CommandLineRunner init(UserRepository userRepository, ProductRepository productRepository) {
		return args->{			
			User user1 = new User("pippo","pippo@topolino.it", "tropsecret");
			userRepository.save(user1);
			
			Product product1 = new Product("image_url", "name", "price", "link");
			productRepository.save(product1);
		};	
	}
}
