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

import com.springboot.model.UsersDetailsModel;
import com.springboot.repository.UserCredentialsRepo;



@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class UsersController {

	@Autowired
	private UserCredentialsRepo repo;
	
	@PostMapping("/Home/Adduser")
	public UsersDetailsModel createUser(HttpServletResponse response,@RequestBody UsersDetailsModel k) throws IOException
	{
		return repo.save(k);
	}
	


	
}

