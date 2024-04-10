package com.techbazar.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.techbazar.modal.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
