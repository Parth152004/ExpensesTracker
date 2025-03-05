package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class RecurringTransactions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long recurring_id;

    @ManyToOne
    @JoinColumn(referencedColumnName = "userId")
    Users users;

    @ManyToOne
    @JoinColumn(referencedColumnName = "accountID")
    Accounts accounts;

    @ManyToOne
    @JoinColumn(referencedColumnName = "categoryID")
    Categories categories;

    float amount;

    String frequency;

    LocalDate next_occurrence;
    LocalDate created_at;

}
