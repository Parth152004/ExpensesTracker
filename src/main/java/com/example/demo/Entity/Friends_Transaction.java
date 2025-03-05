package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Friends_Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long friends_transaction_id;

    @ManyToOne
    @JoinColumn(referencedColumnName = "shared_Expanse_id")
    SharedExpance sharedExpance;

    @ManyToOne
    @JoinColumn(referencedColumnName = "friends_id")
    Friends friends;

    String amount_status;

    LocalDate due_date;
    LocalDate created_at;

}
