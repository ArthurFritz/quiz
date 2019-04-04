package com.arthurfritz.questionario.controller;

import com.arthurfritz.questionario.config.security.JwtTokenProvider;
import com.arthurfritz.questionario.dto.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth/signin")
public class AuthenticateController {

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Value("${login:admin}")
    String username;
    @Value("${password:admin}")
    String password;

    @PostMapping
    public ResponseEntity signin(@RequestBody LoginDTO data) {
        try {
            if (username.equals(data.getUsername()) && password.equals(data.getPassword())) {
                String token = jwtTokenProvider.createToken(username, Collections.singletonList("ADMIN"));
                Map<Object, Object> model = new HashMap<>();
                model.put("type", "Bearer");
                model.put("token", token);
                return ResponseEntity.ok(model);
            } else {
                throw new BadCredentialsException("Invalid username/password supplied");
            }
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }
}
