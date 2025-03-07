package com.example.demo.Service;

import com.example.demo.Entity.Budgets;
import org.springframework.http.ResponseEntity;

import java.util.List;


public interface BudgetService {
    ResponseEntity<Budgets> createBudgets(Budgets budgets);

    List<Budgets> getUserWiseBudget(int id);
}
