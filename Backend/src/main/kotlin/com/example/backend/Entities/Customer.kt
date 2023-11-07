package com.example.backend.Entities

import jakarta.persistence.*

@Entity
@Table(name = "CUSTOMER")
data class Customer(
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    val id : Int?,
    val customerNumber: String,
    val title: String,
    val firstname : String,
    val lastname : String,
    val street : String,
    val city : String,
    val zipcode : Int
)