package com.example.backend.dto

data class CustomerDTO(
    val id : Int?,
    val customer_number: String,
    val title: String,
    val first_name : String,
    val last_name : String,
    val street : String,
    val city : String,
    val zipcode : Int
)
