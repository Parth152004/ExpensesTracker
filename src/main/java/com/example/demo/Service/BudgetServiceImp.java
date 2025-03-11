package com.example.demo.Service;

import com.example.demo.Entity.Budgets;
import com.example.demo.Repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetServiceImp implements BudgetService{

    @Autowired
    BudgetRepository budgetRepository;

    @Override
    public ResponseEntity<Budgets> createBudgets(Budgets budgets) {
        Budgets createBudgets = budgetRepository.save(budgets);
        return ResponseEntity.ok(createBudgets);
    }

    @Override
    public List<Budgets> getUserWiseBudget(int id) {
        return budgetRepository.findByUsersUserID(id);
    }

}
