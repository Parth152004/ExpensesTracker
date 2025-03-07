package com.example.demo.Service;

import com.example.demo.Entity.Friends;
import com.example.demo.Repository.FriendsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendsServiceImp implements FriendsService{
    @Autowired
    FriendsRepository friendsRepository;

    @Override
    public ResponseEntity<Friends> addFriends(Friends friends) {
        return ResponseEntity.ok(friendsRepository.save(friends));
    }

    @Override
    public ResponseEntity<List<Friends>> getFriends(Long id) {
        return ResponseEntity.ok(friendsRepository.getUserWiseFriends(id));
    }
}
