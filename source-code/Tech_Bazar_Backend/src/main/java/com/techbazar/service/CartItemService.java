package com.techbazar.service;

import com.techbazar.exception.CartItemException;
import com.techbazar.exception.UserException;
import com.techbazar.modal.Cart;
import com.techbazar.modal.CartItem;
import com.techbazar.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
