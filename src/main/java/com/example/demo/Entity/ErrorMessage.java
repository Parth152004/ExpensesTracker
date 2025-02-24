package com.example.demo.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
public class ErrorMessage {

    private HttpStatus status;
    private String message;

    // Add this constructor
    public ErrorMessage(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    // Default constructor (if required)
    public ErrorMessage() {}

}
