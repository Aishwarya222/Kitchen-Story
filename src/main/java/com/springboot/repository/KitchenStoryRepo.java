package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.KitchenStoryModel;

@Repository
public interface KitchenStoryRepo extends JpaRepository<KitchenStoryModel, Integer> {

	KitchenStoryModel findByFoodname(String foodname);

}
