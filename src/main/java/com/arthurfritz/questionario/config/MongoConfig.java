package com.arthurfritz.questionario.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.arthurfritz.questionario.repository")
public class MongoConfig {
}
