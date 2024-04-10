package com.techbazar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techbazar.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
