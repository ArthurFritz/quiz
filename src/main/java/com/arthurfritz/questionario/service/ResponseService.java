package com.arthurfritz.questionario.service;

import com.arthurfritz.questionario.dto.ResponseDTO;
import com.arthurfritz.questionario.entity.Report;
import com.arthurfritz.questionario.entity.Status;
import com.arthurfritz.questionario.exception.NotFoundException;
import com.arthurfritz.questionario.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResponseService {

    @Autowired
    private ReportRepository reportRepository;

    public ResponseDTO responseSend(String identifier, ResponseDTO responseDTO) {
        Report report = reportRepository.findById(identifier).filter(item -> item.getStatus().equals(Status.WAIT)).orElseThrow(() -> new NotFoundException("Response not found"));
        report.setDevs(responseDTO.getDevs());
        report.setErrors(responseDTO.getErros());
        report.setStacks(responseDTO.getStacks());
        report.setTests(responseDTO.getTests());
        reportRepository.save(report);
        return responseDTO;
    }

    public ResponseDTO getResponse(String identifier) {
        Report report = reportRepository.findById(identifier).orElseThrow(() -> new NotFoundException("Response not found"));
        return toDTO(report);
    }

    private ResponseDTO toDTO(Report report) {
        return ResponseDTO.builder()
                .devs(report.getDevs())
                .erros(report.getErrors())
                .stacks(report.getStacks())
                .tests(report.getTests())
                .build();
    }
}
