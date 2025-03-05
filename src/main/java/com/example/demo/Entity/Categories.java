package com.example.demo.Entity;

import jakarta.persistence.*;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Name("category_id")
    Long categoryID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    Users users;

    String categoryName;
    String categoryType;

    LocalDate createdAt;
}
