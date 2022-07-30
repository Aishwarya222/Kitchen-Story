package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.UsersDetailsModel;

public interface UserCredentialsRepo extends JpaRepository<UsersDetailsModel, Integer> {



	UsersDetailsModel findByUsername(String username);

	
}
