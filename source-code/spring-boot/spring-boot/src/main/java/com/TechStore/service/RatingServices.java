package com.TechStore.service;

import java.util.List;

import com.TechStore.exception.ProductException;
import com.TechStore.modal.Rating;
import com.TechStore.modal.User;
import com.TechStore.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
