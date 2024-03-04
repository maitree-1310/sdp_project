package com.TechStore.service;

import com.TechStore.exception.UserException;
import com.TechStore.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
