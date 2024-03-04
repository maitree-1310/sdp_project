package com.TechStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TechStore.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
