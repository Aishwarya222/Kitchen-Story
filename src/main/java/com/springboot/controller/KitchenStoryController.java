package com.springboot.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.KitchenStoryModel;
import com.springboot.repository.KitchenStoryRepo;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class KitchenStoryController {

	@Autowired
	private KitchenStoryRepo repo;
	
	//get all food items

	
	@GetMapping("/listAllFoodItems")
	public List<KitchenStoryModel> listAllFoodItems()
	{
		return repo.findAll();
		
	}
	
	@PostMapping("/listAllFoodItems/addItems")
	public KitchenStoryModel createFoodItem(HttpServletResponse response,@RequestBody KitchenStoryModel k) throws IOException
	{
		return repo.save(k);
	}
	
	@GetMapping("/listAllFoodItems/search")
	public ResponseEntity<KitchenStoryModel> getSearchedItems(@PathVariable String foodname)
	{
		KitchenStoryModel k = repo.findByFoodname(foodname);
		System.out.println(foodname);
		return ResponseEntity.ok(k);
	}
	
}
