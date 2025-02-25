package com.example.demo.Controller;

import com.example.demo.Entity.Users;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/AddUser")
    public ResponseEntity<Users> AddUser(@RequestBody Users user){
        return userService.addUser(user);
    }

    @GetMapping("/GetUser")
    public List<Users> GetUsers(){
        return userService.getUser();
    }
}
