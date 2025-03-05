package com.example.demo.Service;


import com.example.demo.Entity.Accounts;

import java.util.List;

public interface AccountService {
    Accounts createAccount(Accounts accounts);

    List<Accounts> getAccountsByUserId(Long userId);
}
