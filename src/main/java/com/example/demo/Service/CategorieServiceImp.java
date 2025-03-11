package com.example.demo.Service;

import com.example.demo.Entity.Categories;
import com.example.demo.Repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategorieServiceImp implements CategorieService{

    @Autowired
    CategorieRepository categoriesRepository;

    @Override
    public ResponseEntity<Categories> createCategories(Categories categories) {
        Categories createdCategories = categoriesRepository.save(categories);
        return ResponseEntity.ok(categories);
    }

    @Override
    public ResponseEntity<List<Categories>> getUserWiseCategories(Long id) {
        return ResponseEntity.ok(categoriesRepository.findByUsersUserID(id));
    }
}
