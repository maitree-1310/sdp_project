package com.TechStore.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.TechStore.modal.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
