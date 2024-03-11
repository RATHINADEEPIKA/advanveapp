package com.homecare.deepika.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.homecare.deepika.entity.Feedbackentity;

public interface FeedbackRepo extends JpaRepository<Feedbackentity, Long> {

}