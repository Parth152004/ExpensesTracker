package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Friends {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long friends_id;

    @ManyToOne
    @JoinColumn(referencedColumnName = "userId")
    Users users;

    String friends_name;

    String contact_info;

    LocalDate created_at = LocalDate.now();
}
