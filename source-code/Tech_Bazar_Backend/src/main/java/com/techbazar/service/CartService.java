package com.techbazar.service;

import com.techbazar.exception.ProductException;
import com.techbazar.modal.Cart;
import com.techbazar.modal.User;
import com.techbazar.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
