package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long userId;

    String userName;

    String email;
    String password;

    Date createAt;

    public Users() {
    }

    public Users(long userId) {
        this.userId = userId;
    }

    public Users(long userId, String userName, String email, String password, Date createAt) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.createAt = createAt;
    }
}

