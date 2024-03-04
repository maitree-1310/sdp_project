package com.TechStore.service;

import com.TechStore.exception.ProductException;
import com.TechStore.modal.Cart;
import com.TechStore.modal.CartItem;
import com.TechStore.modal.User;
import com.TechStore.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
