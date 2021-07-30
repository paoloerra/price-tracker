package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.entites.Product;
import com.example.demo.entites.User;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.repositories.UserRepository;

@SpringBootApplication
public class PriceTrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PriceTrackerBackendApplication.class, args);
	}
	
	//DATABASE INITIALIZATION
	@Bean
	CommandLineRunner init(UserRepository userRepository ,ProductRepository productRepository) {
		return args->{
			User user1 =new User("paoloerra99@gmail.com","Paolo","Erra", "password");
			User user2 =new User("antonio99@gmail.com","Antonio","Erra", "password");
			User user3 =new User("emiliano99@gmail.com","emiliano","Erra", "password");
			
			userRepository.save(user1);
			userRepository.save(user2);
			userRepository.save(user3);
			
			Product product1 = new Product();
			productRepository.save(product1);
		};	
	}
}
