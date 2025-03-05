package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Budgets {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long budget_id;

    @ManyToOne
    @JoinColumn(referencedColumnName = "userId")
    Users users;
 
    @ManyToOne
    @JoinColumn(referencedColumnName = "categoryID")
    Categories categories;

    float amount;
    LocalDate start_date;
    LocalDate end_date;
    LocalDate created_at = LocalDate.now();

}
