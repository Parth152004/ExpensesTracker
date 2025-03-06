package com.example.demo.Entity;

import jakarta.persistence.*;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;


/*
account_id (Primary Key)
user_id (Foreign Key)
account_name
account_type
balance
created_at
*/

@Entity
@Data
@AllArgsConstructor
public class Accounts {

    @Id
    @Name("account_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long accountID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    Users users;

    String accountName;
    String accountType;

    float balance = 0.0f; //

    @Name("created_at")
    LocalDate createdAt = LocalDate.now();

    Accounts(){}
}
