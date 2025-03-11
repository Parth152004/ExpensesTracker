package com.example.demo.Controller;

import com.example.demo.Entity.Transactions;
import com.example.demo.Service.TransactionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    TransactionsService transactionsService;

    @PostMapping("/AddTransaction")
    public ResponseEntity<Transactions> addTransaction(@RequestBody Transactions transactions){
        System.out.println(transactions.getCategories().getCategoryID());
        System.out.println(transactions.getAccounts().getAccountID());
        System.out.println(transactions.getAmount());
        System.out.println(transactions.getTransaction_date());
        System.out.println(transactions.getDescription());

        return transactionsService.addTransaction(transactions);
    }

    @GetMapping("/getTransaction/{id}")
    public ResponseEntity<List<Transactions>> getTransaction(@PathVariable Long id){
        return transactionsService.getUserWiseTransaction(id);
    }
}