package com.techbazar.service;

import com.techbazar.exception.UserException;
import com.techbazar.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
