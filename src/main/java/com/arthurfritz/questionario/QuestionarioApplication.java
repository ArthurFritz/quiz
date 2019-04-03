package com.arthurfritz.questionario;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
public class QuestionarioApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuestionarioApplication.class, args);
    }

}
