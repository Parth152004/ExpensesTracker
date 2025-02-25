package com.example.demo.Service;

import com.example.demo.Entity.Users;
import org.springframework.http.ResponseEntity;

public interface UserService {

    ResponseEntity<Users> addUser(Users user);
}
