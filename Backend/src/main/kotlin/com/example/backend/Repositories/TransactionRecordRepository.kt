package com.example.backend.Repositories

import com.example.backend.Entities.TransactionRecord
import org.springframework.data.jpa.repository.JpaRepository

interface TransactionRecordRepository : JpaRepository<TransactionRecord, Int>