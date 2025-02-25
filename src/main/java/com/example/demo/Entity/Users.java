package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long userId;

    String userName;

    String email;
    String password;

    Date createAt;

}

