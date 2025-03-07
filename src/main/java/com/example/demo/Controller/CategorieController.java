package com.example.demo.Controller;

import com.example.demo.Entity.Categories;
import com.example.demo.Service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategorieController {

    @Autowired
    CategorieService categoriesService;

    @PostMapping("/createCategories")
    public ResponseEntity<Categories> getCategories(@RequestBody Categories categories){
        return categoriesService.createCategories(categories);
    }

    @GetMapping("/getCategories/{id}")
    public ResponseEntity<List<Categories>> getCategories(@PathVariable Long id){
        return categoriesService.getUserWiseCategories(id);
    }
}
