package com.example.backend.controller

import com.example.backend.Entities.Customer
import com.example.backend.Exceptionhandler.ErrorResponse
import com.example.backend.Exceptionhandler.notFoundException
import com.example.backend.Repositories.CustomerRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/customer")
class CustomerController(private val customerRepository : CustomerRepository) {

    @GetMapping("/{id}")
    fun getCustomerById(@PathVariable id : Int) : ResponseEntity<Customer>{
        val customer = customerRepository.findById(id).orElseThrow { notFoundException(id)}
        return ResponseEntity(customer, HttpStatus.OK)
    }

    @ExceptionHandler(notFoundException::class)
    fun handleCustomerNotFoundException(e:notFoundException) : ResponseEntity<ErrorResponse>{
        val errorResponse = ErrorResponse("Customer not found for this id: ${e.id}")
        return ResponseEntity(errorResponse, HttpStatus.NOT_FOUND)
    }

}