package com.techbazar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techbazar.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
