package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class SharedExpance {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long shared_Expanse_id;

    @ManyToOne
    @JoinColumn(referencedColumnName = "userId")
    Users users;

    @ManyToOne
    @JoinColumn(referencedColumnName = "transaction_id")
    Transactions transactions;

    float total_amount;
    float user_amount;

    LocalDate created_at;
}
