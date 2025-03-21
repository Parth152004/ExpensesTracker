package com.example.demo.Repository;

import com.example.demo.Entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorieRepository extends JpaRepository<Categories,Long> {
    @Query("SELECT u FROM Categories u WHERE u.users.userId = ?1")
    List<Categories> findByUsersUserID(Long userId);
}
