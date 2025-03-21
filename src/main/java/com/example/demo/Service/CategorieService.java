package com.example.demo.Service;

import com.example.demo.Entity.Categories;
import org.springframework.http.ResponseEntity;

import java.nio.channels.FileChannel;
import java.util.List;

public interface CategorieService {
    ResponseEntity<Categories> createCategories(Categories categories);

    ResponseEntity<List<Categories>> getUserWiseCategories(Long id);
}
