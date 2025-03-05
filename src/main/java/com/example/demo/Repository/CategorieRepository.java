package com.example.demo.Repository;

import com.example.demo.Entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorieRepository extends JpaRepository<Categories,Long> {

    List<Categories> findByUsersUserId(Long userId);
}
