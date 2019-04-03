package com.arthurfritz.questionario.service;

import com.arthurfritz.questionario.dto.NewSenderDTO;
import com.arthurfritz.questionario.dto.ResponseSenderDTO;
import com.arthurfritz.questionario.entity.Report;
import com.arthurfritz.questionario.entity.Status;
import com.arthurfritz.questionario.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SenderService {

    @Autowired
    private ReportRepository reportRepository;

    public ResponseSenderDTO newSender(NewSenderDTO newSenderDTO) {
        Report save = reportRepository.save(Report.builder()
                .name(newSenderDTO.getName())
                .email(newSenderDTO.getEmail())
                .createAt(LocalDateTime.now())
                .status(Status.WAIT)
                .build());
        return new ResponseSenderDTO(save.getId());
    }

    public void changeStatus(String identifier, Status status) {
        reportRepository.findById(identifier).ifPresent(item -> {
            item.setStatus(status);
            reportRepository.save(item);
        });
    }

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }
}
