
package com.abacus.academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.academy.model.User;
import com.abacus.academy.repository.UserRepository;
import java.util.NoSuchElementException;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public String saveuser(User user) {
		userRepository.save(user);
		return null;
	}

	public User getEmail(String email) {
		User user = userRepository.findByEmail(email);
		if (user != null) {
			return user;
		} else {
			throw new NoSuchElementException();
		}
	}

}
