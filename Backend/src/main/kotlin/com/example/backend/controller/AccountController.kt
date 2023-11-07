package com.example.backend.controller

import com.example.backend.Entities.Account
import com.example.backend.Exceptionhandler.ErrorResponse
import com.example.backend.Exceptionhandler.notFoundException
import com.example.backend.Repositories.AccountRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/account")
class AccountController(private val accountRepository: AccountRepository) {

    @GetMapping("/all")
    fun getAllAccounts(@PathVariable id : Int) : ResponseEntity<List<Account>> {
        val accounts = accountRepository.findAll()
        return ResponseEntity(accounts, HttpStatus.OK)
    }

    @GetMapping("/{id}")
    fun getAccountById(@PathVariable id: Int): ResponseEntity<Account> {
        val account = accountRepository.findById(id).orElseThrow { notFoundException(id) }
        return ResponseEntity(account, HttpStatus.OK)
    }

    @ExceptionHandler(notFoundException::class)
    fun handleAccountNotFoundException(e: notFoundException): ResponseEntity<ErrorResponse> {
        val errorResponse = ErrorResponse("Account not found for this id: ${e.id}")
        return ResponseEntity(errorResponse, HttpStatus.NOT_FOUND)
    }
}