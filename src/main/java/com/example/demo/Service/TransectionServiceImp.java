package com.example.demo.Service;

import com.example.demo.Entity.Transactions;
import com.example.demo.Repository.TransactionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransectionServiceImp implements TransactionsService{

    @Autowired
    TransactionsRepository transactionsRepository;

    @Override
    public ResponseEntity<Transactions> addTransaction(Transactions transactions) {
        Transactions transactions1 = transactionsRepository.save(transactions);
        return ResponseEntity.ok(transactions1);
    }

    @Override
    public ResponseEntity<List<Transactions>> getUserWiseTransaction(Long id) {
        List<Transactions> transactionsList = transactionsRepository.getUseWiseTransactions(id);
        return ResponseEntity.ok(transactionsList);
    }
}
