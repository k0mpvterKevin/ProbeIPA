package com.example.backend.Repositories

import com.example.backend.Entities.Account
import org.springframework.data.jpa.repository.JpaRepository

interface AccountRepository : JpaRepository<Account, Int>