package com.example.demo.Service;

import com.example.demo.Entity.Users;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

    ResponseEntity<Users> addUser(Users user);

    List<Users> getUser();

    ResponseEntity<Users> getUserByEmail(Users users);
}
