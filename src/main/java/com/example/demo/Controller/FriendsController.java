package com.example.demo.Controller;

import com.example.demo.Entity.Friends;
import com.example.demo.Service.FriendsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FriendsController {

    @Autowired
    FriendsService friendsService;

    @PostMapping("/addFrieds")
    public ResponseEntity<Friends> addFriends(@RequestBody Friends friends){
        return friendsService.addFriends(friends);
    }

    @GetMapping("/getFriends/{id}")
    public ResponseEntity<List<Friends>> getFriends(@PathVariable Long id){
        return friendsService.getFriends(id);
    }
}
