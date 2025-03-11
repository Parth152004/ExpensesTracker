package com.example.demo.Repository;

import com.example.demo.Entity.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionsRepository extends JpaRepository<Transactions,Long> {

    @Query("SELECT u FROM Transactions u WHERE u.users.userId = ?1")
    List<Transactions> getUseWiseTransactions(Long id);
}
