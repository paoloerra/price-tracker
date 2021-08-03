package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.example.demo.models.User;


@Component("javasampleapproachMailSender")
public class EmailService {

	@Autowired
	public JavaMailSender javaMailSender;

	public void sendEmailSignUp(String email, String username) {

		SimpleMailMessage msg = new SimpleMailMessage();

		msg.setTo(email);

		msg.setSubject("Dear " + username + ", succesfully signed up!");

		msg.setText("Hello " + username + "! You have succesfully signed up, search for your favourite products prices!");

		javaMailSender.send(msg);
	}
	
	public void sendEmailResetPass(Optional<User> utente, String temporaryPass) {
		
		SimpleMailMessage msg = new SimpleMailMessage();
		
		String userEmail = utente.get().getEmail();
		
		String username = utente.get().getUsername();
		
		
		msg.setTo(userEmail);
		
		msg.setSubject("Dear " + username + ", Your new password is here");
		
		msg.setText("Hello " + username + ", this is your new temporary password " + temporaryPass + ", log and don't forget to change it.");

		javaMailSender.send(msg);
		
		
	}

}
