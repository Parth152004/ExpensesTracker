package com.example.demo.Controller;

import com.example.demo.Entity.Accounts;
import com.example.demo.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/CreateAccount")
    public Accounts CreateUsers(@RequestBody Accounts accounts){
        return accountService.createAccount(accounts);
    }

    @GetMapping("/Accounts/user/{userId}")
    public ResponseEntity<List<Accounts>> getAccountsByUserId(@PathVariable Long userId) {
        List<Accounts> accounts = accountService.getAccountsByUserId(userId);
        if (accounts.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(accounts);
        }
        return ResponseEntity.ok(accounts);
    }
}
