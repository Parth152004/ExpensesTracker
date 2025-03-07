package com.example.demo.Service;

import com.example.demo.Entity.Transactions;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TransactionsService {
    ResponseEntity<Transactions> addTransaction(Transactions transactions);

    ResponseEntity<List<Transactions>> getUserWiseTransaction(Long id);
}
