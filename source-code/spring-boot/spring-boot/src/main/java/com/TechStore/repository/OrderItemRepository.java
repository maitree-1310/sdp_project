package com.TechStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TechStore.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
