package com.arthurfritz.questionario.service;

import com.arthurfritz.questionario.dto.ItemResponseDTO;
import com.arthurfritz.questionario.dto.NewSenderDTO;
import com.arthurfritz.questionario.dto.ResponseSenderDTO;
import com.arthurfritz.questionario.entity.Report;
import com.arthurfritz.questionario.entity.Status;
import com.arthurfritz.questionario.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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

    public List<ItemResponseDTO> getAllReports() {
        return reportRepository.findAll().stream().map(
                (item) -> ItemResponseDTO.builder()
                        .email(item.getEmail())
                        .id(item.getId())
                        .name(item.getName())
                        .send(item.getCreateAt())
                        .status(item.getStatus())
                        .build())
                .collect(Collectors.toList());
    }
}
