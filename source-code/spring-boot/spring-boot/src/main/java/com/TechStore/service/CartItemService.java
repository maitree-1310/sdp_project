package com.TechStore.service;

import com.TechStore.exception.CartItemException;
import com.TechStore.exception.UserException;
import com.TechStore.modal.Cart;
import com.TechStore.modal.CartItem;
import com.TechStore.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
