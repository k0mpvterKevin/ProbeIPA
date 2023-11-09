package com.example.backend.dto

data class AccountDTO(
    val id: Int?,
    val iban: String,
    val balance: Int,
    val overdraft: Long,
    val customerId: Int
)
