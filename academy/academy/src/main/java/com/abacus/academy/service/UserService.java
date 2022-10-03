package com.abacus.academy.service;

import com.abacus.academy.model.User;

public interface UserService {
	public String saveuser(User user);

	public User getEmail(String email);

}
