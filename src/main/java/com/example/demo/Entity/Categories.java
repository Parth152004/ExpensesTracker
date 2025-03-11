package com.example.demo.Entity;

import jakarta.persistence.*;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Name("category_id")
    Long categoryID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    Users users;

    @Name("category_name")
    String categoryName;
    @Name("category_type")
    String categoryType;

    LocalDate createdAt = LocalDate.now();
}
