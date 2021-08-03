package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;


@Component("javasampleapproachMailSender")
public class EmailService {

	@Autowired
	public JavaMailSender javaMailSender;

	public void sendEmail(String email, String username) {

		SimpleMailMessage msg = new SimpleMailMessage();

		msg.setTo(email);

		msg.setSubject("Dear " + username + ", succesfully signed up!");

		msg.setText("Hello " + username + "! You have succesfully signed up, search for your favourite products prices!");

		javaMailSender.send(msg);
	}

}
