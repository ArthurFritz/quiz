package com.arthurfritz.questionario.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED)
public class InvalidJWTTokenException extends RuntimeException {

    public InvalidJWTTokenException(String message) {
        super(message);
    }

}
