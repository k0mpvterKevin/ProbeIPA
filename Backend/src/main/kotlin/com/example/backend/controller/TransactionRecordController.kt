package com.example.backend.controller

import com.example.backend.Entities.TransactionRecord
import com.example.backend.Exceptionhandler.ErrorResponse
import com.example.backend.Exceptionhandler.notFoundException
import com.example.backend.Repositories.TransactionRecordRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/transactionrecord")
class TransactionRecordController(private val transactionRecordRepository: TransactionRecordRepository) {

    @GetMapping("/{id}")
    fun getCustomerById(@PathVariable id: Int): ResponseEntity<TransactionRecord> {
        val transactionRecord = transactionRecordRepository.findById(id).orElseThrow { notFoundException(id) }
        return ResponseEntity(transactionRecord, HttpStatus.OK)
    }

    @ExceptionHandler(notFoundException::class)
    fun handleCustomerNotFoundException(e: notFoundException): ResponseEntity<ErrorResponse> {
        val errorResponse = ErrorResponse("Customer not found for this id: ${e.id}")
        return ResponseEntity(errorResponse, HttpStatus.NOT_FOUND)
    }
}
    