package com.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="fooditems")
@SequenceGenerator(name="seq", initialValue=11, allocationSize=100)
public class KitchenStoryModel {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
	private int itemid;
	private String image;
	private String foodname;
	private int price;
	
	public KitchenStoryModel()
	{
		
	}
	
	public KitchenStoryModel(String foodname,String image, int price) {
		super();
		this.foodname = foodname;
		this.image=image;
		this.price = price;
	}
	

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "KitchenStoryModel [itemid=" + itemid + ", foodname=" + foodname + ", price=" + price + "]";
	}

	
	
}
