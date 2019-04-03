package com.arthurfritz.questionario.repository;

import com.arthurfritz.questionario.entity.Report;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends MongoRepository<Report, String> {

}
