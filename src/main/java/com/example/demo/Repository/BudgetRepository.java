package com.example.demo.Repository;

import com.example.demo.Entity.Budgets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budgets,Long> {

    @Query("SELECT u FROM Budgets u WHERE u.users.userId = ?1")
    List<Budgets> findByUsersUserID(int userID);

}