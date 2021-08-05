package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.WishList;
import com.example.demo.models.WishListId;

@Repository
public interface WishListRepository extends CrudRepository<WishList, WishListId> {

//	@Query(value= "SELECT * FROM wish_list w WHERE w.product_id=?1 AND w.user_id=?2 ", nativeQuery = true)
//	public Boolean existByUserProduct(@Param("user_id") Long user_id, @Param("product_id") Long product_id);

	public Boolean existsByIdUserAndIdProduct(Long user, Long product);

	@Query(value= "SELECT * FROM wish_list w WHERE w.user_id=?1 ", nativeQuery = true)
	public List<WishList> findByUserId(@Param("user_id") Long user_id);
}
