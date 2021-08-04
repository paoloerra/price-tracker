package com.example.demo.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class WishListId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Column(name = "user_id")
	private Long user;
	
	@Column(name = "product_id")
	private Long product;
	
	public WishListId() {	
	}
	
	
	public WishListId(Long user, Long product) {
		this.user = user;
		this.product = product;		
	}

	public Long getUser() {
		return user;
	}

	public void setUser(Long user) {
		this.user = user;
	}

	public Long getProduct() {
		return product;
	}

	public void setProduct(Long product) {
		this.product = product;
	}

	public int hashCode() {
		return (int) (user + product);
	}

	public boolean equals(Object object) {
		if (object instanceof WishListId) {
			WishListId otherId = (WishListId) object;
			return (otherId.user == this.user) && (otherId.product == this.product);
		}
		return false;
	}
}