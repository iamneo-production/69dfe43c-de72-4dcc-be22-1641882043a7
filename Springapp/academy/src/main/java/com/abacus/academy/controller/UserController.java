package com.abacus.academy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.abacus.academy.model.User;
import com.abacus.academy.service.UserService;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/getName")
	public String getName() {
		// db hit
		return "Hello world This is my first java program";
	}

	@PostMapping("/saveuser")
	public String saveUser(@RequestBody User userData) {
		System.out.println(userData.getEmail());
		userService.saveuser(userData);
		System.out.println("success");
		return "success";
	}

	@GetMapping("/login/{email}")
	public ResponseEntity<User> getEmail(@PathVariable String email) {
		try {
			User user = userService.getEmail(email);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
}
