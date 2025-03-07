package com.example.demo.Service;

import com.example.demo.Entity.Friends;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface FriendsService {
    ResponseEntity<Friends> addFriends(Friends friends);

    ResponseEntity<List<Friends>> getFriends(Long id);
}
