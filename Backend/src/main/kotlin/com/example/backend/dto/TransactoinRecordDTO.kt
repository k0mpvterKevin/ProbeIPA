package com.example.backend.dto

import java.sql.Timestamp

data class TransactoinRecordDTO(
    val id: Int?,
    val type : String,
    val text: String,
    val amount: Long,
    val transaction_time : Timestamp,
    val account_id : Int
)
