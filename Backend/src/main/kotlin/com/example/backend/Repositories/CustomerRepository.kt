package com.example.backend.Repositories

import com.example.backend.Entities.Customer
import org.springframework.data.jpa.repository.JpaRepository

interface CustomerRepository : JpaRepository<Customer, Int>