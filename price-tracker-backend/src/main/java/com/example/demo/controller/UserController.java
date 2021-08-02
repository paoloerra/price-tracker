package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	public UserController(UserRepository userRepository) {	
		this.userRepository = userRepository;
	}
	
	@GetMapping(value="/getUser/{username}")
	public Optional<User> getUser(@PathVariable String username) {
		return userRepository.findByUsername(username);
	}

	@GetMapping(value="/getUserId/{id}")
	public Optional<User> getUserById (@PathVariable long id) {
		return userRepository.findById(id);
	}
}
