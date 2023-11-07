package com.example.backend.Entities

import jakarta.persistence.*
import java.sql.Timestamp

@Entity
@Table(name = "TRANSACTION_RECORD")
data class TransactionRecord(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int?,
    val type : String,
    val text: String,
    val amount: Long,
    val transactionTime : Timestamp,
    val accountId : Int
)