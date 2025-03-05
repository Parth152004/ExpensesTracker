package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long transaction_id;

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

    LocalDate transaction_date;

    String description;

    LocalDate created_at;
}
