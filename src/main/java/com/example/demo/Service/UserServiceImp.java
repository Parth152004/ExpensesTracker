package com.example.demo.Service;

import com.example.demo.Entity.Users;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseEntity<Users> addUser(Users user) {
        Users addedUser = userRepository.save(user);
        return ResponseEntity.ok(addedUser);
    }

    @Override
    public List<Users> getUser() {
        return userRepository.findAll();
    }

    @Override
    public ResponseEntity<Users> getUserByEmail(Users user) {
        Users users = userRepository.findByEmail(user.getEmail());
        return ResponseEntity.ok(users);
    }

}
