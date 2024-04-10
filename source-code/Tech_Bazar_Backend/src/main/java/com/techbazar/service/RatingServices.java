package com.techbazar.service;

import java.util.List;

import com.techbazar.exception.ProductException;
import com.techbazar.modal.Rating;
import com.techbazar.modal.User;
import com.techbazar.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
