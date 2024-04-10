package com.techbazar.service;

import java.util.List;

import com.techbazar.exception.ProductException;
import com.techbazar.modal.Review;
import com.techbazar.modal.User;
import com.techbazar.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
