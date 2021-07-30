package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.models.ERole;
import com.example.demo.models.Role;
import com.example.demo.repository.RoleRepository;

@SpringBootApplication
public class PriceTrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PriceTrackerBackendApplication.class, args);
	}
	
	//DATABASE INITIALIZATION
	@Bean
	CommandLineRunner init(RoleRepository roleRepository) {
		return args->{			
			
			// These inserts prevent SQL statements
			Role role1 = new Role(ERole.values()[0]);
			Role role2 = new Role(ERole.values()[1]);
			Role role3 = new Role(ERole.values()[2]);
			
			roleRepository.save(role1);
			roleRepository.save(role2);
			roleRepository.save(role3);
					
		};	
	}
}
