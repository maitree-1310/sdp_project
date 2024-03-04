package com.TechStore.service;

import java.util.List;

import com.TechStore.exception.ProductException;
import com.TechStore.modal.Review;
import com.TechStore.modal.User;
import com.TechStore.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
