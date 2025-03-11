package com.example.demo.Controller;

import com.example.demo.Entity.Budgets;
import com.example.demo.Service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BudgetController {

    @Autowired
    BudgetService budgetService;

    @PostMapping("/createBudget")
    public ResponseEntity<Budgets> createBudgets(@RequestBody Budgets budgets){
        return budgetService.createBudgets(budgets);
    }

    @GetMapping("/getBudget/{id}")
    public List<Budgets> getBudgetsList(@PathVariable int id){
        return budgetService.getUserWiseBudget(id);
    }

}