package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name = "wish_list")
public class WishList {
			
	@EmbeddedId	
    private WishListId id;
	
	@ManyToOne
	@MapsId("user_id")
	@JoinColumn(name = "USER_ID")
	private User user;
	
	@ManyToOne
	@MapsId("product_id") 	
	@JoinColumn(name = "PRODUCT_ID")
	private Product product;

	@Column(name = "threshold")
	private String threshold;
	
	public WishList() {
	}
	
	public WishList(WishListId id, String threshold) {
		this.id = id;		
		this.threshold = threshold;
	}

	public String getThreshold() {
		return threshold;
	}

	public void setThreshold(String threshold) {
		this.threshold = threshold;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
