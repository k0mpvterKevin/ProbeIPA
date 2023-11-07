package com.example.backend.Exceptionhandler

class notFoundException(val id:Int) : RuntimeException()

data class ErrorResponse(val message: String)