package com.example.demo.Service;

import com.example.demo.Entity.Accounts;
import com.example.demo.Repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImp implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Accounts createAccount(Accounts accounts) {
        return accountRepository.save(accounts);
    }

    public List<Accounts> getAccountsByUserId(Long userId) {
        return accountRepository.findByUsersUserId(userId);
    }
}
