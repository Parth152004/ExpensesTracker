package com.example.demo.Repository;

import com.example.demo.Entity.Friends;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendsRepository extends JpaRepository<Friends,Long> {

    @Query("SELECT u FROM Friends u WHERE u.users.userId = ?1 ")
    List<Friends> getUserWiseFriends(Long id);

}
